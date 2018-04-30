const test = require('ava')
const build = require('../lib/build.js')
const {join} = require('path')

function fixture(...path) {
  return join(__dirname, 'fixtures', ...path)
}

test('resolves npm-installed primer package', t => {
  return build(fixture('primer-package.scss'), {})
    .then(() => t.pass())
})

test('resolves relative paths', t => {
  return build(fixture('relative.scss'), {})
    .then(() => t.pass())
})
