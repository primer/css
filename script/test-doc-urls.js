#!/usr/bin/env node
const klaw = require('klaw')
const {join} = require('path')
const {bold, yellow, green, red} = require('colorette')

const deprecated = yellow('deprecated')
const moved = path => paths => {
  if (paths.includes(path)) {
    return {pass: true, message: `→ ${green(path)}`}
  } else {
    return {pass: false, message: `→ ${red(path)} is missing`}
  }
}
const redirect = url => `${green('redirect')} → ${url}`
const removed = red('removed')

/**
 * This is where we track "exceptions" to paths that don't have 1:1 matches
 * between the styleguide and here. Stating them this way _should_ make it easier
 * to replace URLs that moved (for instance) with the appropriate redirects.
 *
 * In most cases, the "exception" value is just a string ('removed', 'deprecated'),
 * but in the case of renamed/moved pages we have a `moved(newPath)` function that,
 * given the list of generated URLs, additionally checks that `newPath` exists in
 * the list and returns a helpful status object. (See ./exceptions.js if you want
 * to understand how this works.)
 */
const exceptions = {
  '/components/octicons': redirect('https://octicons.github.com'),
  '/components/page-headers': deprecated,
  '/components/page-sections': deprecated,
  '/components/tables': deprecated,
  '/getting_started': moved('/getting-started/contributing'),
  '/getting_started/contributing': moved('/getting-started/contributing'),
  '/objects/layout': removed,
  '/packages': removed,
  '/packages/primer': removed,
  '/packages/primer-core': removed,
  '/packages/primer-marketing': removed,
  '/packages/primer-product': removed,
  '/principles/HTML': moved('/principles/html'),
  '/principles/SCSS': moved('/principles/scss'),
  '/tools/sketch-templates': removed,
  '/whats_new': redirect('https://github.com/primer/primer/releases'),
  '/whats_new/changelog': removed,
  '/whats_new/changelog/archived_changelog': removed,
  '/whats_new/status-key': redirect('https://primer.style/doctocat/usage/front-matter#status')
}

const log = console.warn

Promise.all([getStyleguidePaths(), getLocalPaths()])
  .then(([before, after]) => {
    log(`Found ${before.length} paths in github/styleguide, ${after.length} here.\n`)

    const excepted = []
    const missing = before
      .filter(path => !after.includes(path))
      .filter(path => {
        if (path in exceptions) {
          excepted.push(path)
          return false
        }
        return true
      })

    if (excepted.length) {
      log(`Some files were missing, but these had known exceptions:`)
      for (const path of excepted) {
        const exception = exceptions[path]
        const prefix = `${green('✓')} ${yellow(path)}`
        if (typeof exception === 'function') {
          const {pass, message} = exception(after)
          if (pass) {
            log(`${prefix} - ${message}`)
          } else {
            log(`${red('x')} ${yellow(path)} fail: ${message}`)
            missing.push(path)
          }
        } else {
          log(`${prefix} - ${exception}`)
        }
      }
    }
    return missing
  })
  .then(missing => {
    if (missing.length) {
      log(`${red('x')} missing ${bold(missing.length)} path(s):`) // : \n${missing.join('\n')}`)
      for (const path of missing) {
        log(`${red('x')} ${bold(path)}`)
      }
      process.exitCode = 1
    } else {
      log(`\n${green('✓')} All good!`)
    }
  })

function getStyleguidePaths() {
  return `
/components
/components/alerts
/components/avatars
/components/blankslate
/components/box
/components/box-overlay
/components/boxed-groups
/components/branch-name
/components/breadcrumb
/components/buttons
/components/dropdown
/components/flash-banner
/components/forms
/components/labels
/components/markdown
/components/marketing-buttons
/components/navigation
/components/octicons
/components/page-headers
/components/page-sections
/components/pagehead
/components/pagination
/components/popover
/components/progress
/components/select-menu
/components/subhead
/components/tables
/components/tooltips
/components/truncate
/getting_started
/getting_started/contributing
/objects
/objects/grid
/objects/layout
/objects/table-object
/packages
/packages/primer
/packages/primer-core
/packages/primer-marketing
/packages/primer-product
/principles
/principles/HTML
/principles/SCSS
/principles/accessibility
/support
/support/breakpoints
/support/color-system
/support/marketing-variables
/support/spacing
/support/typography
/tools
/tools/atom-packages
/tools/docset
/tools/linting
/tools/local-primer
/tools/prototyping
/tools/sketch-templates
/tools/testing
/utilities
/utilities/animations
/utilities/borders
/utilities/box-shadow
/utilities/colors
/utilities/details
/utilities/flexbox
/utilities/layout
/utilities/margin
/utilities/marketing-borders
/utilities/marketing-filters
/utilities/marketing-layout
/utilities/marketing-margin
/utilities/marketing-padding
/utilities/marketing-type
/utilities/padding
/utilities/typography
/whats_new
/whats_new/changelog
/whats_new/changelog/archived_changelog
/whats_new/status-key
    `
    .trim()
    .split('\n')
}

function getLocalPaths() {
  return getPaths(join(__dirname, '../docs/content')).then(normalizePaths)
}

function getPaths(dir) {
  const paths = []
  return new Promise((resolve, reject) => {
    klaw(dir)
      .on('data', item => paths.push(item.path.substr(dir.length)))
      .on('error', reject)
      .on('end', () => {
        // log(`${paths.length} paths in: ${dir}`)
        resolve(paths)
      })
  })
}

function normalizePaths(paths) {
  const normal = paths.map(path => path.replace(/(\/index)?\.([a-z]+)$/, ''))
  return unique(normal).sort()
}

function unique(list) {
  return list.filter((d, i) => list.indexOf(d) === i)
}
