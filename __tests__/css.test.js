const {
  getCurrentVersion,
  getDeprecatedSelectors,
  getDeprecatedVariables,
  getSelectorDiff,
  getVariableDiff
} = require('./utils/css')
const semver = require('semver')

let selectorsDiff, variablesDiff, version

beforeAll(async () => {
  selectorsDiff = getSelectorDiff()
  variablesDiff = getVariableDiff()
  version = getCurrentVersion()
})

describe('deprecations', () => {
  it('A selector was marked as deprecated but not removed from the codebase', () => {
    const removed = selectorsDiff['removed']
    const deprecations = getDeprecatedSelectors(version)
    if (deprecations.length) {
      // Selectors were marked to be deprecated in this version,
      // but were not removed from the codebase. Please remove these selectors.
      expect(deprecations.sort()).toEqual(removed.sort()) // eslint-disable-line jest/no-conditional-expect
    }
  })

  it('A selector was removed from the codebase and added to upcoming major release deprecations file.', () => {
    const removedSelectors = selectorsDiff['removed']
    const nextMajor = semver.inc(version, 'major')
    const deprecations = getDeprecatedSelectors(nextMajor)
    // Some classes were removed from the codebase, but not found
    // in the next upcoming major release deprecation.json
    expect(deprecations).toEqual(expect.arrayContaining(removedSelectors))
  })

  it('A variable was marked as deprecated but not removed from the codebase', () => {
    const removed = variablesDiff.removed
    const deprecations = getDeprecatedVariables(version)
    if (deprecations.length) {
      // Variables were marked to be deprecated in this version,
      // but were not removed from the codebase. Please remove these variables.
      expect(deprecations.sort()).toEqual(removed.sort()) // eslint-disable-line jest/no-conditional-expect
    }
  })

  it('A variable was removed from the codebase and added to upcoming major release deprecations file.', () => {
    const removed = variablesDiff.removed
    const nextMajor = semver.inc(version, 'major')
    const deprecations = getDeprecatedVariables(nextMajor)
    // Some variables were removed from the codebase, but not found
    // in the next upcoming major release deprecation.json
    expect(deprecations).toEqual(expect.arrayContaining(removed))
  })
})
