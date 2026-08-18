import {
  getCurrentVersion,
  getPackageStats,
  getSelectorDiff,
  getVariableDiff,
  currentVersionDeprecations,
} from './utils/css'
import fs from 'fs'
import semver from 'semver'
import {createRequire} from 'module'

let selectorsDiff, variablesDiff, version
const showOnFocusSelector = '.show-on-focus {'

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

describe('utilities', () => {
  it('keeps show-on-focus declarations important', () => {
    const content = fs.readFileSync('./src/utilities/visibility-display.scss', 'utf8')
    const showOnFocus = getShowOnFocus(content)

    if (showOnFocus === null) {
      throw new Error('Could not find .show-on-focus block')
    }

    for (const declaration of [
      'position: absolute !important;',
      'width: 1px !important;',
      'height: 1px !important;',
      'padding: 0 !important;',
      'overflow: hidden !important;',
      'clip: rect(1px, 1px, 1px, 1px) !important;',
      'border: 0 !important;',
    ]) {
      expect(showOnFocus).toContain(declaration)
    }
  })

  it('contains !important annotations only in show-on-focus', () => {
    const files = getFiles('./src/utilities').filter(file => file.endsWith('.scss'))

    for (const file of files) {
      const content = stripShowOnFocus(fs.readFileSync(file, 'utf8'))

      if (content.includes('!important')) {
        throw new Error(`${file} contains !important outside show-on-focus`)
      }
    }
  })
})

describe('deprecations', () => {
  it('expects deprecations and their replacement to not be equal.', () => {
    const deprecations = currentVersionDeprecations()
    Object.keys(deprecations['selectors']).forEach(deprecation => {
      const replacement = deprecations['selectors'][deprecation]
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

function getFiles(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap(entry => {
    const file = `${directory}/${entry.name}`

    return entry.isDirectory() ? getFiles(file) : file
  })
}

function stripShowOnFocus(content) {
  const showOnFocus = getShowOnFocusRange(content)

  if (showOnFocus === null) {
    return content
  }

  return `${content.slice(0, showOnFocus.start)}${content.slice(showOnFocus.end)}`
}

function getShowOnFocus(content) {
  const range = getShowOnFocusRange(content)

  return range === null ? null : content.slice(range.start, range.end)
}

function getShowOnFocusRange(content) {
  const start = content.indexOf(showOnFocusSelector)

  if (start === -1) {
    return null
  }

  const blockStart = content.indexOf('{', start)
  let depth = 0

  for (let index = blockStart; index < content.length; index++) {
    if (content[index] === '{') {
      depth++
    } else if (content[index] === '}') {
      depth--
    }

    if (depth === 0) {
      return {start, end: index + 1}
    }
  }

  return null
}
