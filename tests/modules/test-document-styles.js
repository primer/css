const test = require("ava")
const css = require(process.cwd())
const fs = require("fs")
const glob = require("glob")

let selectors
let classnames

const classRegex = /class="([^"]+)"/ig

// Find unique selectors from the cssstats selector list
function uniqueSelectors(s) {
  s = s.map(s => {
    // split multi-selectors into last class used .foo .bar .baz
    return s.split(" ").pop()
  })
  .filter(s => {
    // remove any selector that aren't just regular classnames eg. ::hover [type]
    return s.match(/^\.[a-z\-_]+$/ig)
  })

  // return only the unique selectors
  return [...new Set(s)]
}

// From the given glob sources array, read the files and return found classnames
function documentedClassnames(sources) {
  const classes = []
  sources.forEach(f => {
    glob.sync(f).forEach(g => {
      var match = null

      // While we match a classRegex in the source
      while ((match = classRegex.exec(fs.readFileSync(g, "utf8"))) != null) {

        // Get the matched classnames "..." and split by space into classes
        classes.push(...match[1].split(" "))
      }
    })
  })

  // return only the unique classnames
  return Array.from(new Set(classes))
}

// Before all the tests get the selectors and classnames
test.before(t => {
  selectors = uniqueSelectors(css.cssstats.selectors.values)
  classnames = documentedClassnames([
    "docs/*.md",
    "README.md"
  ])
})

test("Every selector class is documented", t => {
  const undocumented = []
  selectors.forEach(selector => {
    if (!classnames.includes(selector.replace(/^\./, ""))) {
      undocumented.push(selector)
    }
  })
  t.is(undocumented.length, 0, `I did not find documentation for the "${undocumented.join(", ")}" selector(s) in the ${process.env.npm_package_name} module.`);
})
