/*
 * This object's keys are (semver) version numbers, and the
 * values are arrays of objects each with a "selectors"
 * array and a "message" string.
 */
const versionDeprecations = {
  '14.0.0': [
    {
      selectors: [
        'a:active',
        'article',
        'aside',
        'audio',
        'audio:not([controls])',
        'button:-moz-focusring',
        'button::-moz-focus-inner',
        'canvas',
        'dfn',
        'figcaption',
        'figure',
        'figure',
        'footer',
        'header',
        'html [type="button"]',
        'img',
        'mark',
        'menu',
        'nav',
        'optgroup',
        'section',
        'sub',
        'sup',
        'video',
        '[hidden]',
        '[type="button"]:-moz-focusring',
        '[type="button"]::-moz-focus-inner',
        '[type="checkbox"]',
        '[type="number"]::-webkit-inner-spin-button',
        '[type="number"]::-webkit-outer-spin-button',
        '[type="radio"]',
        '[type="reset"]:-moz-focusring',
        '[type="reset"]::-moz-focus-inner',
        '[type="search"]::-webkit-search-cancel-button',
        '[type="search"]::-webkit-search-decoration',
        '[type="submit"]:-moz-focusring',
        '[type="submit"]::-moz-focus-inner'
      ],
      message: `normalize.css has been modernized! You shouldn't need to style built-in elements.`
    },
    {
      selectors: [
        '.SelectMenu-divider:first-child',
        '.SelectMenu-divider:last-child',
        '.SelectMenu-item+.SelectMenu-item',
        '.SelectMenu--hasFilter .SelectMenu-item:last-child'
      ],
      message: `The SelectMenu component has been refactored. See [the docs](https://primer.style/css/components/select-menu) for more information.`
    }
  ],
  '13.0.0': [
    {
      selectors: [
        '.btn-purple',
        '.btn-purple:focus',
        '.btn-purple.focus',
        '.btn-purple:hover',
        '.btn-purple.hover',
        '.btn-purple:active',
        '.btn-purple.selected',
        '[open]>.btn-purple',
        '.btn-purple:disabled',
        '.btn-purple.disabled',
        '.btn-purple .Counter'
      ],
      message: `Please don't make purple buttons.`
    },
    {
      selectors: ['.text-pending'],
      message: `Please use the "text-yellow" class instead of "text-pending".`
    },
    {
      selectors: ['.bg-pending'],
      message: `Please use the "bg-yellow-dark" class instead of "bg-pending".`
    },
    {
      selectors: [
        '.container',
        '.container::before',
        '.container::after',
        '.columns',
        '.columns::before',
        '.columns::after',
        '.column',
        '.one-third',
        '.two-thirds',
        '.one-fourth',
        '.one-half',
        '.three-fourths',
        '.one-fifth',
        '.four-fifths'
      ],
      message: `Please use [grid classes](https://primer.style/css/objects/grid).`
    },
    {
      selectors: ['.centered'],
      message: `You can use the "mx-auto" class to center any element.`
    },
    {
      selectors: [
        '.dropdown-menu-content',
        '.dropdown.active .dropdown-menu-content',
        '.dropdown-menu-content.anim-scale-in'
      ],
      message: `The "dropdown-menu-content" class is unnecessary.`
    }
  ]
}

const {version: CURRENT_VERSION} = require('./package.json')
const semver = require('semver')

// map selectors to the version and message of their deprecation
const selectorDeprecations = new Map()
for (const [version, deps] of Object.entries(versionDeprecations)) {
  for (const {selectors, message} of deps) {
    for (const selector of selectors) {
      selectorDeprecations.set(selector, {version, message})
    }
  }
}

function isSelectorDeprecated(selector, version = CURRENT_VERSION) {
  const deprecation = selectorDeprecations.get(selector)
  return deprecation ? semver.gte(deprecation.version, version) : false
}

module.exports = {versionDeprecations, selectorDeprecations, isSelectorDeprecated}
