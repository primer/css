import {
  getCurrentVersion,
  getPackageStats,
  getSelectorDiff,
  getVariableDiff,
  currentVersionDeprecations
} from './utils/css'
import semver from 'semver'

let selectorsDiff, variablesDiff, version

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
  it('expects deprecations and their replacement to not be equal.', () => {
    const deprecations = currentVersionDeprecations()
    Object.keys(deprecations["selectors"]).forEach(deprecation => {
      const replacement = deprecations["selectors"][deprecation]
      expect(deprecation).not.toEqual(replacement)
    })
  })
})
