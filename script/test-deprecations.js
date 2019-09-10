#!/usr/bin/env node
const fetch = require('node-fetch')
const minimist = require('minimist')
const {basename} = require('path')
const {green, red, yellow} = require('colorette')

const {versionDeprecations} = require('../deprecations')
const X = red('𐄂')
const I = yellow('i')
const V = green('✓')

const args = minimist(process.argv.slice(2))
if (args.help) {
  console.log(`
script/${basename(__filename)} [options]

  --version <version>    The published version of @primer/css from which to
                         fetch CSS selector stats; default: "latest".
  --bundle <bundle>      The CSS bundle to compare; default: "primer".

Fetches the CSS selectors for the published package and checks that:

1. All selectors listed in deprecations.js for the current local version (in
   package.json) have been deleted.
2. All selectors deleted in the current local version have been listed in
   deprecations.js.

If either check fails, the process exits with an error status (1).
`)
  process.exit(0)
}

checkDeprecations(args)

async function checkDeprecations(options = {}) {
  const {bundle = 'primer', version = 'latest'} = options

  const currentVersion = require('../package.json').version
  const statsPath = `dist/stats/${bundle}.json`

  const local = require(`../${statsPath}`)
  const remote = await fetch(`https://unpkg.com/@primer/css@${version}/${statsPath}`).then(res => res.json())

  const {changed, added, removed} = diffLists(remote.selectors.values, local.selectors.values)
  if (changed === 0) {
    console.log(`no selectors added or removed in bundle "${bundle}"`)
    return
  }

  const deprecations = versionDeprecations[currentVersion] || []
  const deprecatedSelectors = deprecations.reduce((list, deprecation) => list.concat(deprecation.selectors), [])
  console.log(`${I} ${removed.length} selectors removed locally (compared with ${version})`)
  console.log(`${I} ${deprecatedSelectors.length} selectors deprecated in v${currentVersion}`)
  if (added.length) {
    console.log(`${I} ${added.length} selectors added`)
  }

  const errors = []
  for (const deprecation of deprecations) {
    for (const selector of deprecation.selectors) {
      if (!removed.includes(selector)) {
        const error = `"${selector}" deprecated, but not removed`
        errors.push(error)
        console.log(`${X} ${error}`)
      } else {
        console.log(`${V} "${selector}" is officially deprecated`)
      }
      deprecatedSelectors.push(selector)
    }
  }

  for (const removedSelector of removed) {
    if (!deprecatedSelectors.includes(removedSelector)) {
      const error = `"${removedSelector}" has been removed, but was not listed in versionDeprecations['${currentVersion}']`
      errors.push(error)
      console.log(`${X} ${error}`)
    } else {
      // console.log(`${V} "${removedSelector}" removed and deprecated!`)
    }
  }

  if (errors.length) {
    process.exitCode = 1
  }
}

function diffLists(before, after) {
  const added = after.filter(value => !before.includes(value))
  const removed = before.filter(value => !after.includes(value))
  return {
    changed: added.length + removed.length,
    added,
    removed
  }
}
