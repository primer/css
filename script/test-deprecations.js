#!/usr/bin/env node
const fetch = require('node-fetch')
const {green, red, yellow} = require('colorette')
const {versionDeprecations} = require('../deprecations')

const X = red('𐄂')
const I = yellow('i')
const V = green('✓')

checkDeprecations()

async function checkDeprecations(options = {}) {
  const {bundle = 'primer', version = 'latest'} = options

  const currentVersion = require('../package.json').version
  const statsPath = `dist/stats/${bundle}.json`

  const local = require(`../${statsPath}`)
  const remote = await fetch(`https://unpkg.com/@primer/css@${version}/${statsPath}`).then(res => res.json())

  const {changed, added, removed} = diffLists(remote.selectors.values, local.selectors.values)
  if (changed === 0) {
    console.log(`no selectors added or removed`)
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
        const error = `"${selector}" has *not* been removed`
        errors.push(error)
        console.log(`${X} ${error}`)
      } else {
        console.log(`${V} "${selector}" is deprecated!`)
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
      console.log(`${V} "${removedSelector}" removed and deprecated!`)
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
