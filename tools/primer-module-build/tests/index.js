const build = require('../lib/build.js')
const test = require('ava')
const tempy = require('tempy')
const {exists} = require('fs-extra')
const {join} = require('path')

function fixture(...path) {
  return join(__dirname, 'fixtures', ...path)
}

function assertExists(t, filename) {
  return exists(filename)
    .then(exists => {
      exists ? t.pass() : t.fail(`No such file: ${filename}`)
    })
}

test('resolves npm-installed primer package', t => {
  return build(fixture('primer-package.scss'), {})
    .then(() => t.pass())
})

test('resolves relative paths', t => {
  return build(fixture('relative.scss'), {})
    .then(() => t.pass())
})

test('writes build.css by default', t => {
  const outputDir = tempy.directory()
  const outputFile = join(outputDir, 'build.css')
  return build(fixture('primer-package.scss'), {outputDir})
    .then(() => assertExists(t, outputFile))
})
