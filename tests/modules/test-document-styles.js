const {join} = require('path')
const fse = require('fs-extra')
const globby = require('globby')
const test = require('ava')
const minimatch = require('minimatch')

const cwd = process.cwd()
const css = require(cwd)
const pkg = require(join(cwd, 'package.json'))

const unique = list => Array.from(new Set(list)).sort()

/*
 * These are the regular expressions that match what we
 * expect to be class name instances in the docs.
 * Patterns should group the matched class name(s) such that:
 *
 * ```js
 * const [, klass, ] = pattern.exec(content)
 * ```
 */
const classPatterns = [
  // HTML class attributes
  /class="([^"]+)"/ig,
  /:class ?=> "([^"]+)"/g,
  /class: "([^"]+)"/g,
  // assume that ERB helpers generate an element with the same class
  /<%= (\w+)\b/g,
]

const whitelistClasses = (pkg.primer ? pkg.primer.class_whitelist || [] : [])
  .concat('js*')

const isWhitelisted = klass => {
  return whitelistClasses.some(glob => minimatch(klass, glob))
}

// Find unique selectors from the cssstats selector list
function uniqueSelectors(selectors) {
  return unique(selectors.map(s => {
    // split multi-selectors into last class used .foo .bar .baz
    return s.split(' ').pop()
  })
  .filter(s => {
    // only match exact class selectors
    return s.match(/^\.[a-z\-_]+$/ig)
  }))
}

// From the given glob sources array, read the files and return found classnames
function getDocumentedClassnames(sources) {
  return globby(sources)
    .then(paths => {
      return Promise.all(paths.map(path => {
        return fse.readFile(path, 'utf8')
          .then(content => ({path, content}))
      }))
    })
    .then(files => {
      return files.reduce((classes, {path, content}) => {
        classPatterns.forEach(pattern => {
          let match
          while (match = pattern.exec(content)) {
            // get the matched classnames and split by whitespace into classes
            let klasses = match[1].trim().split(/\s+/)
            classes.push(...klasses)
          }
        })
        return classes
      }, [])
    })
    .then(classes => unique(classes))
}

const selectors = uniqueSelectors(css.cssstats.selectors.values)
let classnames
test.before(t => {
  return getDocumentedClassnames([
      'docs/*.md',
      'README.md'
    ])
    .then(_ => (classnames = _))
})

selectors.forEach(selector => {
  const klass = selector.replace(/^\./, '')
  test(`Selector "${selector}" is documented/whitelisted`, t => {
    t.plan(1)
    if (isWhitelisted(klass)) {
      t.pass(`Selector "${selector}" is whitelisted`)
    } else {
      t.is(classnames.includes(klass), true, `Selector "${selector}" is not documented`)
    }
  })
})
