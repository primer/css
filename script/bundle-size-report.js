#!/usr/bin/env node
const fetch = require('node-fetch')
const filesize = require('filesize')
const cssstats = require('cssstats')
const minimist = require('minimist')
const {green, gray, yellow, red} = require('colorette')
const {table, getBorderCharacters} = require('table')

const options = minimist(process.argv.slice(2))

const DELTA = '±'
const VERSION = options.version || 'latest'
const QUIET = options.quiet || options.q || 0
const SORT = options.sort || options.s || 'gzip'
// the default is descending
const ASCENDING = options.asc || options.a
const ONLY_BUNDLES = options.only
const ALL_BUNDLES = !ONLY_BUNDLES && options.all
const META_BUNDLES = options.all || options.meta || false

const {name} = require('../package.json')
const unpkgBaseURL = `https://unpkg.com/${name}@${VERSION}/`

// ensure that K and B values line up vertically
const filesizeConfig = {symbols: {KB: 'K'}}
const prettySize = bytes => filesize(bytes, filesizeConfig)
const meta = require('../dist/meta.json')

let bundles = Object.values(meta.bundles)

// fitler out support bundles, since they don't generate CSS
bundles = bundles.filter(bundle => !isSupportBundleName(bundle.name))

if (ONLY_BUNDLES) {
  const only = new Set(ONLY_BUNDLES.trim().split(/\s*,\s*/))
  bundles = bundles.filter(bundle => only.has(bundle.name))
} else if (!ALL_BUNDLES) {
  bundles = META_BUNDLES ? bundles.filter(isMetaBundle) : bundles.filter(bundle => !isMetaBundle(bundle))
}

Promise.all(
  bundles.map(bundle => {
    const entry = {
      name: bundle.name,
      path: bundle.css,
      local: require(`../${bundle.stats}`),
      remote: {}
    }
    return fetch(unpkgBaseURL + bundle.stats)
      .then(res => res.json())
      .catch(() => {
        console.warn(`Unable to fetch old "${bundle.name}" stats from unpkg; assuming it's new!`)
        return cssstats('')
      })
      .then(stats => (entry.remote = stats))
      .then(() => entry)
  })
).then(entries => {
  const columns = [
    {title: 'name', value: get(d => d.name), alignment: 'left'},

    // CSS selector count
    {title: 'selectors', value: get(d => d.local.selectors.total)},
    {title: DELTA, value: delta(d => d.selectors.total), id: 'selector-delta'},

    // gzipped size (bytes)
    {title: 'gzip size', value: get(d => d.local.gzipSize, prettySize), id: 'gzip'},
    {title: DELTA, value: delta(d => d.gzipSize, prettySize), id: 'gzip-delta'},

    // raw size (bytes)
    {title: 'raw size', value: get(d => d.local.size, prettySize), id: 'size'},
    {title: DELTA, value: delta(d => d.size, prettySize), id: 'size-delta'},

    // path goes last
    {title: 'path', value: get(d => d.path), alignment: 'left'}
  ]

  for (const [index, column] of Object.entries(columns)) {
    column.index = index
  }

  const header = columns.map(c => c.title)
  let data = entries.map(entry => columns.map(c => c.value(entry)))

  if (SORT) {
    const index = columns.findIndex(c => c.id === SORT || c.title === SORT)
    if (index > -1) {
      const compare = ASCENDING ? compareAscending : compareDescending
      data.sort((a, b) => compare(a[index].value, b[index].value))
    } else {
      console.warn(`No such sort column: "${SORT}"! Output will not be sorted.`)
    }
  }

  if (QUIET) {
    data = data.filter(cells => {
      return cells.filter((cell, i) => columns[i].title === DELTA).every(cell => cell.value !== 0)
    })
  }

  const rows = data.map(cells => cells.map(String))

  console.log(
    table([header].concat(rows), {
      columns,
      columnDefault: {
        alignment: 'right'
      },
      border: getBorderCharacters('norc'),
      drawHorizontalLine(index, size) {
        return index <= 1 || index === size
      }
    })
  )
})

function get(getter, format = String) {
  return entry => {
    const value = getter(entry)
    return {
      value,
      toString: () => format(value)
    }
  }
}

function delta(getter, format = String, options = {}) {
  const {moreIsGood = false, badThreshold = 1000} = options
  return entry => {
    const local = getter(entry.local)
    const remote = getter(entry.remote)
    const value = local - remote
    if (value === 0) {
      return {
        value,
        toString: () => `  ${gray(0)}`
      }
    } else {
      const sign = value > 0 ? '+' : '-'
      const num = Math.abs(value)
      const good = moreIsGood ? value > 0 : value < 0
      const color = good ? green : value >= badThreshold ? red : yellow
      return {
        value,
        toString: () => color(`${sign} ${format(num)}`)
      }
    }
  }
}

function isMetaBundle(bundle) {
  return !bundle.imports.every(isSupportBundleName)
}

function isSupportBundleName(name) {
  // "support", "marketing-support", and any future ones?
  return name.endsWith('support')
}

function compareAscending(a, b) {
  return a - b
}

function compareDescending(a, b) {
  return b - a
}
