const test = require('ava')
const fs = require('fs-extra')
const globby = require('globby')
const {join} = require('path')

const {packages} = require('../lerna.json')
const year = (new Date()).getFullYear()
const yearRegex = new RegExp(`Copyright \\(c\\) ${year} GitHub Inc\\.`)

test(`LICENSE files have the current year ${year}`, t => {
  return getPackageGlobs('LICENSE')
    .then(paths => {
      t.plan(paths.length)
      return paths.map(path => {
        const license = fs.readFileSync(path, 'utf8')
        return t.regex(license, yearRegex, `The license "${path}" does not include the current year ${year}`)
      })
    })
})

test(`Source header copyrights have the current year ${year}`, t => {
  return getPackageGlobs('{*.scss,lib/**/*.scss}')
    .then(paths => {
      t.plan(paths.length)
      return paths.map(path => {
        const source = fs.readFileSync(path, 'utf8')
        if (source.match(/Copyright \(c\)/)) {
          return t.regex(source, yearRegex, `The source's header "${path}" does not include the current year ${year}`)
        } else {
          return t.true(true)
        }
      })
    })
})

function getPackageGlobs(glob) {
  return globby(packages.map(pkg => join(pkg, glob)))
}
