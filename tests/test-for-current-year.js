const test = require("ava")
const fs = require("fs-extra")
const globby = require("globby")

const year = (new Date()).getFullYear()
const yearRegex = new RegExp(`Copyright \\(c\\) ${year} GitHub Inc\\.`)

test(`LICENSE files have the current year ${year}`, t => {
  return globby(["**/LICENSE", "!**/node_modules/**/LICENSE"])
    .then(paths => {
      t.plan(paths.length)
      return paths.map(path => {
        const license = fs.readFileSync(path, "utf8")
        return t.regex(license, yearRegex, `The license "${path}" does not include the current year ${year}`)
      })
    })
})

test(`Source header copyrights have the current year ${year}`, t => {
  return globby(["**/*.css", "**/*.scss", "!**/node_modules/**", "!**/build/**"])
    .then(paths => {
      t.plan(paths.length)
      return paths.map(path => {
        const source = fs.readFileSync(path, "utf8")
        if (source.match(/Copyright \(c\)/)) {
          return t.regex(source, yearRegex, `The source's header "${path}" does not include the current year ${year}`)
        } else {
          return t.true(true)
        }
      })
    })
})
