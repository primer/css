const test = require("ava")
const css = require(process.env.PWD)
const fs = require("fs")
const glob = require("glob")

var selectors, classnames = null
const classRegex = /class="([^"]+)"/ig

function uniqueSelectors(s) {
  return s.filter(s => {
    // remove any selectors with hover states
    return !s.includes(":") && !s.includes(".")
  }).map(s => {
    // split multi-selectors into last class used .foo .bar .baz
    return s.split(" ").pop()
  })
}

function documentedClassnames(sources) {
  var cn = []
  sources.forEach( f => {
    glob.sync(f).forEach( g => {
      var match = null
      while ((match = classRegex.exec(fs.readFileSync(g).toString())) != null) {
        cn = cn.concat(match[1].split(" "))
      }
    })
  })
  return [...new Set(cn)]
}

test.before(async t => {
  selectors = await uniqueSelectors(css.cssstats.selectors.values)
  classnames = await documentedClassnames([
    'docs/*.md',
    'README.md'
  ])
})

test("Every selector class is documented", t => {
  var undocumented = []
  selectors.forEach( selector => {
    if (!classnames.includes(selector.replace(".", ""))) {
      undocumented.push(selector)
    }
  })
  t.is(undocumented.length, 0, `I did not find documentation for the "${undocumented.join(", ")}" selector(s) in the ${process.env.npm_package_name} module.`);
})
