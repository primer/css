#!/usr/bin/env node
if (process.env.NOW_URL) {
  console.warn('copy.js should not run in Now!')
  process.exit(0)
}

const klaw = require('klaw-sync')
const minimatch = require('minimatch')
const {green, red, yellow} = require('colorette')
const {basename, dirname, join} = require('path')
const {copySync, ensureDirSync, removeSync, writeFileSync} = require('fs-extra')

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
const items = klaw(sourceDir, {
  nodir: true,
  filter: ({path}) => path.indexOf('node_modules') === -1
})
const mapEntries = Object.entries(map)
for (const item of items) {
  // item.path is fully-qualified, so we need to remove the sourceDir
  // from the beginning of it to get the relative path
  const source = item.path.substr(sourceDir.length + 1)
  let linked = false
  for (const [pattern, name] of mapEntries) {
    if (source === pattern || minimatch(source, pattern)) {
      const dest = typeof name === 'function' ? name(source) : name
      if (dest) {
        links.push({source, dest})
        linked = true
      }
      break
    }
  }
  // log any markdown files that aren't matched
  if (!linked && source.endsWith('.md')) {
    skipped.push(source)
  }
}

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

// TODO: read `join(destDir, 'copies.json')` and delete any previous copies

for (const {source, dest} of links) {
  console.warn(`${source} ${yellow('->')} ${dest}`)
  const destPath = join(destDir, dest)
  const destPathDir = dirname(destPath)
  removeSync(destPath)
  ensureDirSync(destPathDir)
  copySync(join(sourceDir, source), destPath)
}

console.warn(yellow('writing copies.json...'))
const copies = links.map(link => link.dest)
writeFileSync(join(destDir, '_copies.json'), JSON.stringify(copies, null, 2), 'utf8')
console.warn(green('done!'))

function shortName(path) {
  return path.match(/primer-([-\w]+)/)[1]
}
