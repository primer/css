const execa = require('execa')
const klaw = require('klaw')
const {basename, dirname, join, resolve} = require('path')
const {promisify} = require('util')
const {readFile, writeFile} = require('fs-extra')
const {bold, yellow, green, red} = require('colorette')
const {deprecated, moved, redirect, removed} = require('./exceptions')

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
  '/packages/primer': removed,
  '/packages/primer-core': removed,
  '/packages/primer-marketing': removed,
  '/packages/primer-product': removed,
  '/principles/HTML': moved('/principles/html'),
  '/principles/SCSS': moved('/principles/scss'),
  '/whats_new': redirect('https://github.com/primer/primer/releases'),
  '/whats_new/changelog': removed,
  '/whats_new/changelog/archived_changelog': removed,
  '/whats_new/status-key': moved('/status-key')
}

const log = console.warn

const STYLEGUIDE_ROOT = join(__dirname, '../../../../github/styleguide')
const CACHE_FILE = join(__dirname, 'fixtures/path-cache.txt')
const {CI} = process.env
const CLEAN = process.argv.slice(2).includes('--clean')

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
  if (CI) {
    return readLines(CACHE_FILE)
  }
  return buildStyleguide()
    .then(getPathsFromStyleguide)
    .then(writeLines(CACHE_FILE))
    .catch(error => {
      /*
       * If _anything_ goes wrong (on CI, no styleguide repo), just get the list
       * of paths from the committed file.
       */
      log(`${yellow('!!!')} Unable to get styleguide paths:\n\n  ${error}\n`)
      log(`Using the paths in ${CACHE_FILE} instead...\n`)
      return readLines(CACHE_FILE)
    })
}

function buildStyleguide() {
  if (CLEAN) {
    const cwd = STYLEGUIDE_ROOT
    return pathExists(cwd).then(exists => {
      if (exists) {
        return execa('script/bootstrap', {cwd}).then(() => execa('npm', ['run', 'build-site'], {cwd}))
      } else {
        throw new ERror(`The styleguide root (${cwd}) doesn't exist`)
      }
    })
  }
  return Promise.resolve(true)
}

function getPathsFromStyleguide() {
  return getPaths(join(STYLEGUIDE_ROOT, '_site/primer'))
    .then(paths => paths.filter(path => !path.includes('code_example.html')))
    .then(normalizePaths)
}

function getLocalPaths() {
  return getPaths(join(__dirname, '../pages/css')).then(normalizePaths)
}

function getPaths(dir, options) {
  const paths = []
  return new Promise((resolve, reject) => {
    klaw(dir, options)
      .on('data', item => paths.push(item.path.substr(dir.length)))
      .on('error', reject)
      .on('end', () => {
        // log(`${paths.length} paths in: ${dir}`)
        resolve(paths)
      })
  })
}

function readLines(filename) {
  return readFile(filename, 'utf8').then(str => str.trim().split(/[\r\n]+/))
}

function writeLines(filename) {
  return lines => writeFile(filename, lines.join('\n'), 'utf8').then(() => lines)
}

function normalizePaths(paths) {
  const normal = paths.map(path => path.replace(/(\/index)?\.([a-z]+)$/, ''))
  return unique(normal).sort()
}

function unique(list) {
  return list.filter((d, i) => list.indexOf(d) === i)
}
