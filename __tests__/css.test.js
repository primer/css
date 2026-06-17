import {
  getCurrentVersion,
  getPackageStats,
  getSelectorDiff,
  getVariableDiff,
  currentVersionDeprecations
} from './utils/css'
import semver from 'semver'
import {createRequire} from 'module'

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

describe('classnames', () => {
  let classNames

  beforeAll(async () => {
    classNames = (await import('../dist/classnames.js')).default
  })

  it('exports a non-empty Set', () => {
    expect(classNames).toBeInstanceOf(Set)
    expect(classNames.size).toBeGreaterThan(0)
  })

  it('contains known classnames', () => {
    expect(classNames.has('btn')).toBe(true)
    expect(classNames.has('Box-body')).toBe(true)
    expect(classNames.has('d-flex')).toBe(true)
  })

  it('contains bare tokens without a leading dot', () => {
    for (const className of classNames) {
      expect(className.startsWith('.')).toBe(false)
    }
  })

  it('exposes the same Set from the CommonJS build', () => {
    const require = createRequire(import.meta.url)
    const cjsClassNames = require('../dist/classnames.cjs')
    expect(cjsClassNames).toBeInstanceOf(Set)
    expect([...cjsClassNames].sort()).toEqual([...classNames].sort())
  })
})
