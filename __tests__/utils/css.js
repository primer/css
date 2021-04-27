const {join} = require('path')
const currentPath = join(__dirname, '../../')
const lastPath = join(__dirname, '../../tmp/node_modules/@primer/css')

function diffLists(before, after) {
  const added = after.filter(value => !before.includes(value))
  const removed = before.filter(value => !after.includes(value))
  return {
    changed: added.length + removed.length,
    added,
    removed
  }
}

function getSelectors(versionPath) {
  const stats = require(join(versionPath, './stats/primer.json'))
  return stats.selectors.values
}

function getVariables(versionPath) {
  const variables = require(join(versionPath, './variables.json'))
  return Object.keys(variables)
}

function getCurrentVersion() {
  const pkg = require(join(currentPath, './package.json'))
  return pkg.version
}

function getDeprecatedSelectors(version) {
  let deprecations = require(join(currentPath, './dist/deprecations.json'))
  deprecations = deprecations.versions[version] || []
  return deprecations.reduce((list, deprecation) => list.concat(deprecation.selectors), []).filter(v => v)
}

function getDeprecatedVariables(version) {
  let deprecations = require(join(currentPath, './dist/deprecations.json'))
  deprecations = deprecations.versions[version] || []
  return deprecations.reduce((list, deprecation) => list.concat(deprecation.variables), []).filter(v => v)
}

function currentVersionSelectors() {
  return getSelectors(join(currentPath, './dist'))
}

function currentVersionVariables() {
  return getVariables(join(currentPath, './dist'))
}

function lastVersionSelectors() {
  return getSelectors(join(lastPath, './dist'))
}

function lastVersionVariables() {
  return getVariables(join(lastPath, './dist'))
}

function getSelectorDiff() {
  return diffLists(lastVersionSelectors(), currentVersionSelectors())
}

function getVariableDiff() {
  return diffLists(lastVersionVariables(), currentVersionVariables())
}

module.exports = {
  getCurrentVersion,
  getDeprecatedSelectors,
  getDeprecatedVariables,
  getSelectorDiff,
  getVariableDiff
}
