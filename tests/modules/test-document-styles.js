const test = require("ava")
const css = require(process.env.PWD)
const fs = require("fs")
const glob = require("glob")

var selectors, classnames = null
const classRegex = /class="([^"]+)"/ig

// Find unique selectors from the cssstats selector list
function uniqueSelectors(s) {
  s = s.map(s => {
    // split multi-selectors into last class used .foo .bar .baz
    return s.split(" ").pop()
  }).filter(s => {
    // remove any selector that aren't just regular classnames eg. ::hover [type]
    return s.match(/^\.[a-z\-_]+$/ig)
  })

  // return only the unique selectors
  return [...new Set(s)]
}

// From the given glob sources array, read the files and return found classnames
function documentedClassnames(sources) {
  var cn = []
  sources.forEach( f => {
    glob.sync(f).forEach( g => {
      var match = null

      // While we match a classRegex in the source
      while ((match = classRegex.exec(fs.readFileSync(g).toString())) != null) {

        // Get the matched classnames "..." and split by space into classes
        cn = cn.concat(match[1].split(" "))
      }
    })
  })

  // return only the unique classnames
  return [...new Set(cn)]
}

// Before all the tests get the selectors and classnames
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
