/*
 * This object's keys are (semver) version numbers, and the
 * values are arrays of objects each with a "selectors"
 * array and a "message" string.
 */
const versionDeprecations = {
  '16.0.0': [
    {
      selectors: [
        '.markdown-body li'
      ],
      message: `This selector is not available in Primer CSS 16.0.0. Please refer to the documentation.`
    }
  ],
  '15.0.0': [
    {
      selectors: [
        '.btn-outline:active .Counter',
        '.btn-outline.selected .Counter',
        '.btn-outline[aria-selected=true] .Counter',
        '.tabnav .Counter',
        '.SideNav-item:hover::before',
        '.SideNav-item:focus::before',
        '.UnderlineNav-item:hover .UnderlineNav-octicon',
        '.UnderlineNav-item:focus .UnderlineNav-octicon',
        '.UnderlineNav--right .UnderlineNav-item',
        '.pagination::before',
        '.pagination::after',
        '.pagination a:first-child',
        '.pagination span:first-child',
        '.pagination em:first-child',
        '.pagination a:last-child',
        '.pagination span:last-child',
        '.pagination em:last-child',
        '.pagination .selected',
        '.IssueLabel--big .g-emoji',
        '.IssueLabel--big:hover',
        '.SelectMenu-item[aria-checked="true"]',
        '.SelectMenu-item[aria-checked="true"] .SelectMenu-icon--check',
        '.SelectMenu-tab:not([aria-checked="true"]):hover',
        '.SelectMenu-tab:not([aria-checked="true"]):active',
        '.SelectMenu-tab:not([aria-selected="true"]):hover'
      ],
      message: `This selector is not available in Primer CSS 15.0.0. Please refer to the documentation.`
    }
  ],
  '14.4.0': [
    {
      selectors: [
        '.breadcrumb-item[aria-current]',
        '.breadcrumb-item[aria-current]::after',
        '.menu-item[aria-current]',
        '.menu-item[aria-current]::before',
        '.tabnav-tab[aria-current]',
        '.filter-item[aria-current]',
        '.SideNav-item[aria-current="page"]',
        '.SideNav-item[aria-current="page"]::before',
        '.SideNav-subItem[aria-current="page"]',
        '.subnav-item[aria-current]',
        '.UnderlineNav-item[aria-current]',
        '.UnderlineNav-item[aria-current] .UnderlineNav-octicon',
        '.pagination [aria-current]',
        '.pagination [aria-current]:hover'
      ],
      message: `These selectors are not needed anymore.`
    }
  ],
  '14.0.0': [
    {
      selectors: [
        '.SelectMenu-item+.SelectMenu-item',
        '.SelectMenu-divider:first-child',
        '.SelectMenu-divider:last-child',
        '.SelectMenu--hasFilter .SelectMenu-item:last-child',
        '.SelectMenu-item[aria-checked="true"] .SelectMenu-icon'
      ],
      message: `These selectors are deprecated and not used anymore.`
    },
    {
      selectors: [
        '.flex-item-equal',
        '.flex-sm-item-equal',
        '.flex-md-item-equal',
        '.flex-lg-item-equal',
        '.flex-xl-item-equal'
      ],
      message: `This variable is deprecated. Use "flex-1" instead.`
    },
    {
      selectors: ['.UnderlineNav-item.selected', '.UnderlineNav-item.selected .UnderlineNav-octicon'],
      message: `Please use aria-selected="true" to indicate the selected state of an UnderlineNav item.`
    },
    {
      variables: ['$status-pending'],
      message: `This variable is deprecated.`
    },
    {
      variables: ['$highlight-yellow'],
      message: `This variable is deprecated.`
    },
    {
      variables: ['$repo-private-text', '$repo-private-bg', '$repo-private-icon'],
      message: `These variables are deprecated.`
    },
    {
      variables: ['$marketingSpacers', '$allSpacers'],
      message: `Please use the $marketing-spacers and $marketing-all-spacers variables.`
    },
    {
      variables: ['$exploregrid-item-border-radius'],
      message: `This variable is deprecated. Use "4px" instead.`
    },
    {
      variables: ['$stats-switcher-py', '$stats-viewport-height'],
      message: `These variables are deprecated.`
    },
    {
      variables: ['$min_tab_size', '$max_tab_size'],
      message: `These variables are deprecated.`
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
const variableDeprecations = new Map()
for (const [version, deps] of Object.entries(versionDeprecations)) {
  for (const {selectors = [], variables = [], message} of deps) {
    for (const selector of selectors) {
      selectorDeprecations.set(selector, {version, message})
    }
    for (const variable of variables) {
      variableDeprecations.set(variable, {version, message})
    }
  }
}

function isSelectorDeprecated(selector, version = CURRENT_VERSION) {
  const deprecation = selectorDeprecations.get(selector)
  return deprecation ? semver.gte(deprecation.version, version) : false
}

function isVariableDeprecated(variable, version = CURRENT_VERSION) {
  const deprecation = variableDeprecations.get(variable)
  return deprecation ? semver.gte(deprecation.version, version) : false
}

module.exports = {
  versionDeprecations,
  selectorDeprecations,
  variableDeprecations,
  isSelectorDeprecated,
  isVariableDeprecated
}
