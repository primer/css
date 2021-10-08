import {join, dirname} from 'path'
import semver from 'semver'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

const currentPath = join(__dirname, '../../')
const lastPath = join(__dirname, '../../tmp/node_modules/@primer/css')

function diffLists(before, after) {
  const added = [...new Set(after.filter(value => !before.includes(value)))]
  const removed = [...new Set(before.filter(value => !after.includes(value)))]
  return {
    changed: added.length + removed.length,
    added,
    removed
  }
}

function getSelectors(versionPath) {
  const stats = JSON.parse(fs.readFileSync(join(versionPath, './stats/primer.json')))
  return stats.selectors.values
}

function getVariables(versionPath) {
  const variables = JSON.parse(fs.readFileSync(join(versionPath, './variables.json')))
  return Object.keys(variables)
}

export function getCurrentVersion() {
  const pkg = JSON.parse(fs.readFileSync(join(currentPath, './package.json')))
  return semver.parse(pkg.version)
}

export function getPackageStats(packageName) {
  const stats = JSON.parse(fs.readFileSync(join(currentPath, './dist', `./stats/${packageName}.json`)))
  return stats
}

function getDeprecations(versionPath) {
  const deprecations = JSON.parse(fs.readFileSync(join(versionPath, './deprecations.json')))
  return deprecations
}

function currentVersionSelectors() {
  return getSelectors(join(currentPath, './dist'))
}

function currentVersionVariables() {
  return getVariables(join(currentPath, './dist'))
}

export function currentVersionDeprecations() {
  return getDeprecations(join(currentPath, './dist'))
}

function lastVersionSelectors() {
  return getSelectors(join(lastPath, './dist'))
}

function lastVersionVariables() {
  return getVariables(join(lastPath, './dist'))
}

export function getSelectorDiff() {
  return diffLists(lastVersionSelectors(), currentVersionSelectors())
}

export function getVariableDiff() {
  return diffLists(lastVersionVariables(), currentVersionVariables())
}
