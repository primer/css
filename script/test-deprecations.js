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

Promise.all([checkSelectorDeprecations(args), checkVariableDeprecations(args)]).then(
  ([deprecationErrors, variableErrors]) => {
    const errors = [...deprecationErrors, ...variableErrors]
    if (errors.length) {
      console.log(`\n${errors.length} error${errors.length === 1 ? '' : 's'}:`)
      for (const error of errors) {
        console.log(`${X} ${error}`)
      }
      process.exit(1)
    } else {
      console.log(`${V} no errors!`)
    }
  }
)

async function checkSelectorDeprecations(options = {}) {
  const {bundle = 'primer', version = 'latest'} = options

  const currentVersion = require('../package.json').version
  const statsPath = `dist/stats/${bundle}.json`

  const local = require(`../${statsPath}`)
  const remote = await fetch(`https://unpkg.com/@primer/css@${version}/${statsPath}`).then(res => res.json())

  const {changed, added, removed} = diffLists(remote.selectors.values, local.selectors.values)
  if (changed === 0) {
    console.log(`${I} no selectors changed in bundle "${bundle}" (${version} -> ${currentVersion})`)
    // return
  }

  const deprecations = versionDeprecations[currentVersion] || []
  const deprecatedSelectors = deprecations.reduce((list, deprecation) => list.concat(deprecation.selectors), [])
  if (removed.length) {
    console.log(`${I} ${removed.length} selectors removed locally (compared with ${version})`)
  }
  if (deprecatedSelectors.length) {
    console.log(`${I} ${deprecatedSelectors.length} selectors to be deprecated in ${currentVersion}`)
  }
  if (added.length) {
    console.log(`${I} ${added.length} selectors added`)
  }

  const errors = []
  for (const {selectors = []} of deprecations) {
    for (const selector of selectors) {
      if (!removed.includes(selector)) {
        errors.push(`"${selector}" deprecated, but not removed`)
      } else {
        console.log(`${V} selector "${selector}" is officially deprecated`)
      }
      deprecatedSelectors.push(selector)
    }
  }

  for (const removedSelector of removed) {
    if (!deprecatedSelectors.includes(removedSelector)) {
      errors.push(`"${removedSelector}" has been removed, but was not listed in versionDeprecations['${currentVersion}']`)
    } else {
      // console.log(`${V} "${removedSelector}" removed and deprecated!`)
    }
  }

  return errors
}

async function checkVariableDeprecations(options = {}) {
  const {version = 'latest'} = options

  const currentVersion = require('../package.json').version
  const varsPath = `dist/variables.json`

  const local = require(`../${varsPath}`)
  const remote = await fetch(`https://unpkg.com/@primer/css@${version}/${varsPath}`).then(res => res.json())

  const {changed, added, removed} = diffLists(Object.keys(remote), Object.keys(local))
  if (changed === 0) {
    console.log(`${I} no variables changed (${version} -> ${currentVersion})`)
    // return
  }

  const deprecations = versionDeprecations[currentVersion] || []
  const deprecatedVariables = deprecations.reduce((list, deprecation) => list.concat(deprecation.variables), [])
  if (removed.length) {
    console.log(`${I} ${removed.length} variables removed locally (compared with ${version})`)
  }
  if (deprecatedVariables.length) {
    console.log(`${I} ${deprecatedVariables.length} variables to be deprecated in ${currentVersion}`)
  }
  if (added.length) {
    console.log(`${I} ${added.length} variables added`)
  }

  const errors = []
  for (const {variables = []} of deprecations) {
    for (const variable of variables) {
      if (!removed.includes(variable)) {
        if (remote[variable]) {
          errors.push(`variable "${variable}" deprecated, but not removed`)
        } else {
          console.log(`${I} variable "${variable}" doesn't exist in data for version: ${version}`)
        }
      } else {
        console.log(`${V} variable "${variable}" is officially deprecated`)
      }
      deprecatedVariables.push(variable)
    }
  }

  for (const removedVariable of removed) {
    if (!deprecatedVariables.includes(removedVariable)) {
      errors.push(`"${removedVariable}" has been removed, but was not listed in versionDeprecations['${currentVersion}']`)
    } else {
      // console.log(`${V} "${removedVariable}" removed and deprecated!`)
    }
  }

  return errors
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
