const chokidar = require('chokidar')
const klaw = require('klaw-sync')
const minimatch = require('minimatch')
const {green, red, yellow} = require('colorette')
const {basename, dirname, join} = require('path')
const {copySync, ensureDirSync, removeSync, writeFileSync} = require('fs-extra')
const {getIgnored, setIgnored} = require('./ignore')

const sourceDir = join(__dirname, '../../modules')
const destDir = join(__dirname, '../pages/css')
const ignoreFile = join(destDir, '.gitignore')

const map = {
  '../CHANGELOG.md': 'whats-new/changelog.md',
  'primer/README.md': false, // 'packages/primer.md',
  'primer-base/README.md': false, // 'support/base.md',
  'primer-core/README.md': false, // 'packages/primer-core.md',
  'primer-layout/README.md': 'objects/layout.md',
  'primer-layout/docs/*.md': path => `objects/${basename(path)}`,
  'primer-marketing-support/README.md': 'support/marketing-variables.md',
  'primer-marketing-type/README.md': 'utilities/marketing-type.md',
  'primer-marketing-utilities/README.md': false, // 'utilities/marketing.md',
  'primer-marketing-utilities/docs/*.md': path => `utilities/marketing-${basename(path)}`,
  'primer-marketing/README.md': false, // 'packages/primer-marketing.md',
  'primer-product/README.md': false, // 'packages/primer-product.md',
  'primer-support/README.md': false, // 'support/index.md',
  'primer-support/docs/*.md': path => `support/${basename(path)}`,
  'primer-table-object/README.md': 'objects/table-object.md',
  'primer-utilities/README.md': false, // 'utilities/index.md',
  'primer-utilities/docs/*.md': path => `utilities/${basename(path)}`,
  // this is a catch-all rule that needs to go last so that it doesn't override others
  'primer-*/README.md': path => `components/${shortName(path)}.md`,
}

module.exports = {sync, watch}

function sync({debug = false}) {
  const log = debug ? console.warn : noop
  const ignored = getIgnored(ignoreFile)
  for (const file of ignored) {
    log(`${yellow('x')} removing: ${file}`)
    removeSync(file)
  }
  const links = getLinks(sourceDir, destDir, map)
  log(yellow(`linking ${links.length} files...`))
  syncLinks(links)
  const toBeIgnored = links.map(link => link.dest.substr(destDir.length + 1))
  log(yellow(`adding ${toBeIgnored.length} files to ${ignoreFile}...`))
  setIgnored(ignoreFile, toBeIgnored)
  log(green('done!'))
}

function watch(options) {
  const {debug = false} = options
  const keys = Object.keys(map)
  const globs = keys.map(path => join(sourceDir, path))
  const log = debug ? console.warn : noop
  let timeout
  const update = path => {
    if (timeout) return
    timeout = setTimeout(() => {
      log(`${yellow('changed')} ${path}`)
      sync(options)
      clearTimeout(timeout)
      timeout = null
    }, 50)
  }
  sync(options)
  log(`watching in ${yellow(sourceDir)}: ${keys.join(', ')}`)
  return chokidar.watch(globs)
    // .on('add', update)
    .on('change', update)
    .on('unlink', update)
}

function syncLinks(links) {
  for (const {source, dest} of links) {
    const destDir = dirname(dest)
    removeSync(dest)
    ensureDirSync(destDir)
    copySync(source, dest)
  }
}

function getLinks(sourceDir, destDir, map) {
  const links = []

  const mapEntries = Object.entries(map)
  for (const [source, dest] of mapEntries) {
    if (source.indexOf('..') === 0 && typeof dest === 'string') {
      links.push({source, dest})
    }
  }

  console.warn(yellow(`walking: ${sourceDir}...`))
  const items = klaw(sourceDir, {
    nodir: true,
    filter: item => item.path.indexOf('node_modules') === -1
  })

  let skipped = []
  for (const item of items) {
    // item.path is fully-qualified, so we need to remove the sourceDir
    // from the beginning of it to get the relative path
    const source = item.path.substr(sourceDir.length + 1)
    let linked = false
    for (const [pattern, name] of mapEntries) {
      if (source === pattern || minimatch(source, pattern)) {
        const dest = typeof name === 'function' ? name(source) : name
        if (dest) {
          console.warn(`${source} ${yellow('->')} ${dest}`)
          links.push({source, dest})
          linked = true
        }
        break
      }
    }
    if (!linked && source.endsWith('.md')) {
      skipped.push(source)
    }
  }

  skipped = skipped.filter(file => file !== 'README.md')
  if (skipped.length) {
    console.warn(`skipped ${skipped.length} markdown files:`)
    for (const file of skipped) {
      console.warn(`${red('x')} ${file}`)
    }
  }

  return links.map(({source, dest}) => ({
    source: join(sourceDir, source),
    dest: join(destDir, dest)
  }))
}

function shortName(path) {
  return path.match(/primer-([-\w]+)/)[1]
}

function noop() {
}
