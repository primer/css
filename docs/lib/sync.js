const klaw = require('klaw-sync')
const minimatch = require('minimatch')
const {green, red, yellow} = require('colorette')
const {basename, dirname, join} = require('path')
const {copySync, ensureDirSync, removeSync, writeFileSync} = require('fs-extra')

module.exports = {getLinks, sync}

function sync(links) {
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
