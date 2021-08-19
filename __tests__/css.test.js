import {
  getCurrentVersion,
  getDeprecatedSelectors,
  getDeprecatedVariables,
  getPackageStats,
  getSelectorDiff,
  getVariableDiff
} from './utils/css'
import semver from 'semver'

let selectorsDiff, variablesDiff, version

// Because of a change in analyzer this was incorrectly in the list
const variableAllowList = ['$marketing-all-spacers']
const selectorAllowList = [
  '.Truncate .Truncate-text',
  '.Truncate .Truncate-text+.Truncate-text',
  '.Truncate .Truncate-text.Truncate-text--expandable:active',
  '.Truncate .Truncate-text.Truncate-text--expandable:focus',
  '.Truncate .Truncate-text.Truncate-text--expandable:hover',
  '.Truncate .Truncate-text.Truncate-text--primary'
]

beforeAll(async () => {
  selectorsDiff = getSelectorDiff()
  variablesDiff = getVariableDiff()
  version = getCurrentVersion()
})

describe('css', () => {
  it('The support.css file contains no compiled css', () => {
    const supportStats = getPackageStats('support')
    expect(supportStats.size).toEqual(0)
  })
})

describe('deprecations', () => {
  it('A selector was marked as deprecated but not removed from the codebase', () => {
    const removed = selectorsDiff['removed']
    const deprecations = getDeprecatedSelectors(version.raw)
    if (deprecations.length) {
      // Selectors were marked to be deprecated in this version,
      // but were not removed from the codebase. Please remove these selectors.
      expect(deprecations.sort()).toEqual(removed.sort()) // eslint-disable-line jest/no-conditional-expect
    }
  })

  it('A selector was removed from the codebase but not added to upcoming major release deprecations file.', () => {
    const removedSelectors = selectorsDiff['removed'].filter(v => !selectorAllowList.includes(v))

    if (version.minor !== 0 && version.patch !== 0) {
      const nextMajor = semver.inc(version.raw, 'major')
      const deprecations = getDeprecatedSelectors(nextMajor)
      // Some classes were removed from the codebase, but not found
      // in the next upcoming major release deprecation.js
      expect(deprecations.sort()).toEqual(expect.arrayContaining(removedSelectors.sort())) // eslint-disable-line jest/no-conditional-expect
    }
  })

  it('A variable was marked as deprecated but not removed from the codebase', () => {
    const removed = variablesDiff.removed
    const deprecations = getDeprecatedVariables(version.raw)
    if (deprecations.length) {
      // Variables were marked to be deprecated in this version,
      // but were not removed from the codebase. Please remove these variables.
      expect(deprecations.sort()).toEqual(removed.sort()) // eslint-disable-line jest/no-conditional-expect
    }
  })

  it('A variable was removed from the codebase and added to upcoming major release deprecations file.', () => {
    const removed = variablesDiff.removed.filter(v => !variableAllowList.includes(v))
    if (version.minor !== 0 && version.patch !== 0) {
      const nextMajor = semver.inc(version.raw, 'major')
      const deprecations = getDeprecatedVariables(nextMajor)
      // Some variables were removed from the codebase, but not found
      // in the next upcoming major release deprecation.json
      expect(deprecations).toEqual(expect.arrayContaining(removed)) // eslint-disable-line jest/no-conditional-expect
    }
  })
})
