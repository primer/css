#!/usr/bin/env node
/* eslint-disable no-console */
const globby = require('globby')
const cssstats = require('cssstats')
const postcss = require('postcss')
const loadConfig = require('postcss-load-config')
const {remove, mkdirp, readFile, writeFile} = require('fs-extra')
const {dirname, join} = require('path')
const generateTheme = require('../lib/generate-theme')

const inDir = 'src'
const outDir = 'dist'
const statsDir = join(outDir, 'stats')
const themeDir = join(outDir, 'themes')
const encoding = 'utf8'

// Bundle paths are normalized in getPathName() using dirname() and then
// replacing any slashes with hyphens, but some bundles need to be
// special-cased. Keys in this object are the path minus the "src/" prefix,
// and values are the bundle file base name. ("primer" produces
// "dist/primer.css", etc.)
const bundleNames = {
  'index.scss': 'primer'
}

async function dist() {
  try {
    const bundles = {}
    const themes = {}
    const {plugins, options} = await loadConfig()
    const processor = postcss(plugins)

    await remove(outDir)
    await mkdirp(statsDir)
    await mkdirp(themeDir)

    const files = await globby([`${inDir}/**/index.scss`])

    const inPattern = new RegExp(`^${inDir}/`)
    const tasks = files.map(async from => {
      const path = from.replace(inPattern, '')
      const name = bundleNames[path] || getPathName(dirname(path))

      const to = join(outDir, `${name}.css`)
      const meta = {
        name,
        source: from,
        sass: `@primer/css/${path}`,
        css: to,
        map: `${to}.map`,
        js: join(outDir, `${name}.js`),
        stats: join(statsDir, `${name}.json`),
        legacy: `primer-${name}/index.scss`
      }

      const scss = await readFile(from, encoding)
      meta.imports = getExternalImports(scss, path).map(getPathName)
      const result = await processor.process(scss, Object.assign({from, to}, options))
      await Promise.all([
        writeFile(to, result.css, encoding),
        writeFile(meta.stats, JSON.stringify(cssstats(result.css)), encoding),
        writeFile(meta.js, `module.exports = {cssstats: require('./stats/${name}.json')}`, encoding),
        result.map ? writeFile(meta.map, result.map, encoding) : null
      ])
      bundles[name] = meta
    })

    const themeFiles = await globby(`${inDir}/themes/*.js`)
    for (const themeFile of themeFiles) {
      const name = themeFile.split('/').pop().replace('.js', '')
      const theme = require(`../${themeFile}`)
      const preamble = generateTheme(theme)

      const root = postcss.root()
      root.append(preamble)
      root.append(postcss.atRule({name: 'import', params: `"../index.scss"`}))

      const scss = root.toString()
      const from = join(inDir, 'themes', `${name}.scss`)
      await writeFile(from, scss, encoding)

      const to = join(themeDir, `${name}.css`)
      const map = `${to}.map`
      const result = await processor.process(scss, Object.assign({from, to}, options))
      await Promise.all([
        writeFile(to, result.css, encoding),
        result.map ? writeFile(map, result.map, encoding) : null
      ])
      themes[name] = {
        css: to,
        map
      }
    }

    await Promise.all(tasks)

    const meta = {bundles, themes}
    await writeFile(join(outDir, 'meta.json'), JSON.stringify(meta, null, 2), encoding)
    await writeVariableData()
    await writeDeprecationData()
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  }
}

function getExternalImports(scss, relativeTo) {
  const imports = []
  const dir = dirname(relativeTo)
  // XXX: this might *seem* fragile, but since we enforce double quotes via
  // stylelint, I think it's kosher.
  scss.replace(/@import "(.+)\/index\.scss";/g, (_, dep) => {
    imports.push(join(dir, dep))
  })
  return imports
}

function getPathName(path) {
  return path.replace(/\//g, '-')
}

function writeDeprecationData() {
  const {versionDeprecations, selectorDeprecations, variableDeprecations} = require('../deprecations')
  const data = {
    versions: versionDeprecations,
    selectors: mapToObject(selectorDeprecations),
    variables: mapToObject(variableDeprecations)
  }
  return writeFile(join(outDir, 'deprecations.json'), JSON.stringify(data, null, 2))

  function mapToObject(map) {
    return Array.from(map.entries()).reduce((obj, [key, value]) => {
      obj[key] = value
      return obj
    }, {})
  }
}

if (require.main === module) {
  dist()
}

function writeVariableData() {
  const analyzeVariables = require('./analyze-variables')
  return Promise.all([
    analyzeVariables('src/support/index.scss'),
    analyzeVariables('src/marketing/support/index.scss')
  ]).then(([support, marketing]) => {
    const data = Object.assign({}, support, marketing)
    writeFile(join(outDir, 'variables.json'), JSON.stringify(data, null, 2))
  })
}
