#!/usr/bin/env node
const klaw = require('klaw')
const minimatch = require('minimatch')
const {green, red, yellow} = require('colorette')
const {basename, dirname, join} = require('path')
const {copy, ensureDir, remove} = require('fs-extra')

const sourceDir = join(__dirname, '../modules')

const links = [
  // this sits outside of the modules directory, but join() will
  // properly resolve the "../" path for us!
  {source: '../CHANGELOG.md', dest: 'whats_new/changelog.md'}
]

const map = {
  'primer/README.md': 'packages/primer.md',
  'primer-base/README.md': false, // FIXME: 'support/base.md'?
  'primer-core/README.md': 'packages/primer-core.md',
  'primer-layout/README.md': 'objects/layout.md',
  'primer-layout/docs/*.md': path => `objects/${basename(path)}`,
  'primer-marketing-support/README.md': 'support/marketing-variables.md',
  'primer-marketing-type/README.md': 'utilities/marketing-type.md',
  'primer-marketing-utilities/README.md': false,
  'primer-marketing-utilities/docs/*.md': path => `utilities/marketing-${basename(path)}`,
  'primer-marketing/README.md': 'packages/primer-marketing.md',
  'primer-product/README.md': 'packages/primer-product.md',
  'primer-support/README.md': false, // 'support/index.md',
  'primer-support/docs/*.md': path => `support/${basename(path)}`,
  'primer-table-object/README.md': 'objects/table-object.md',
  'primer-utilities/README.md': false, // 'utilities/index.md',
  'primer-utilities/docs/*.md': path => `utilities/${basename(path)}`,
  // this is a catch-all rule that needs to go last so that it doesn't override others
  'primer-*/README.md': path => `components/${shortName(path)}.md`,
}

console.warn(yellow(`walking: ${sourceDir}...`))
let skipped = []
klaw(sourceDir)
  .on('data', item => {
    // item.path is fully-qualified, so we need to remove the sourceDir
    // from the beginning of it to get the relative path
    const source = item.path.substr(sourceDir.length + 1)
    for (const [pattern, name] of Object.entries(map)) {
      if (source === pattern || minimatch(source, pattern)) {
        const dest = typeof name === 'function' ? name(source) : name
        if (dest) {
          links.push({source, dest})
        }
        return
      }
    }
    // log any markdown files that aren't matched
    if (source.endsWith('.md')) {
      skipped.push(source)
    }
  })
  .on('end', () => {
    // ignore modules/README.md
    skipped = skipped.filter(file => file !== 'README.md')
    if (skipped.length) {
      console.warn(`skipped ${skipped.length} markdown files:`)
      for (const file of skipped) {
        console.warn(`${red('x')} ${file}`)
      }
    }
    console.warn(yellow(`linking ${links.length} files...`))
    // put all the links in the pages/css directory
    const destDir = join(__dirname, 'pages/css')
    Promise.all(links.map(({source, dest}) => {
        console.warn(`${source} ${yellow('->')} ${dest}`)
        const destPath = join(destDir, dest)
        const destPathDir = dirname(destPath)
        return remove(destPath)
          .then(() => ensureDir(destPathDir))
          .then(() => copy(join(sourceDir, source), destPath))
      }))
      .then(() => console.warn(green('done!')))
      .catch(error => {
        console.error(error)
        process.exitCode = 1
      })
  })

function shortName(path) {
  return path.match(/primer-([-\w]+)/)[1]
}
