const test = require("ava")
const css = require(process.env.PWD)

var selectors, classnames = null

function uniqueSelectors(s) {
  return s.filter(s => {
    // remove any selectors with hover states
    return !s.includes(":")
  }).map(s => {
    // split multi-selectors into last class used .foo .bar .baz
    return s.split(" ").pop()
  })
}

function documentedClassnames(sources) {
  return sources
}

test.before(async t => {
  selectors = await uniqueSelectors(css.cssstats.selectors.values)
  classnames = await documentedClassnames([
    'docs/*.md',
    'README.md'
  ])
})

test("builds test css", t => {
  console.log(selectors);
  console.log(classnames);
  t.truthy(false)
})
