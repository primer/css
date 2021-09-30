import {
  getCurrentVersion,
  getPackageStats,
  getSelectorDiff,
  getVariableDiff
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
