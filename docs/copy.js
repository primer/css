#!/usr/bin/env node
if (process.env.NOW_URL) {
  console.warn('copy.js should not run in Now!')
  process.exit(0)
}

const {green, red, yellow} = require('colorette')
const {basename, join} = require('path')
const {removeSync} = require('fs-extra')
const {getLinks, sync} = require('./lib/sync')
const {getIgnored, setIgnored} = require('./lib/ignore')

const sourceDir = join(__dirname, '../modules')
const destDir = join(__dirname, 'pages/css')

const ignoreFile = join(destDir, '.gitignore')
const ignored = getIgnored(ignoreFile)
for (const file of ignored) {
  console.warn(`${yellow('x')} removing: ${file}`)
  removeSync(file)
}

const links = getLinks(sourceDir, destDir, {
  '../CHANGELOG.md': 'whats-new/changelog.md',
  'primer/README.md': false, // 'packages/primer.md',
  'primer-base/README.md': 'support/base.md',
  'primer-core/README.md': false, // 'packages/primer-core.md',
  'primer-layout/README.md': 'objects/layout.md',
  'primer-layout/docs/*.md': path => `objects/${basename(path)}`,
  'primer-marketing-support/README.md': 'support/marketing-variables.md',
  'primer-marketing-type/README.md': 'utilities/marketing-type.md',
  'primer-marketing-utilities/README.md': 'utilities/marketing.md',
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
})

console.warn(yellow(`linking ${links.length} files...`))
sync(links)
const toBeIgnored = links.map(link => link.dest.substr(destDir.length + 1))
console.warn(yellow(`adding ${toBeIgnored.length} files to ${ignoreFile}...`))
setIgnored(ignoreFile, toBeIgnored)
console.warn(green('done!'))

function shortName(path) {
  return path.match(/primer-([-\w]+)/)[1]
}
