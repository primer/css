const test = require("ava")
const css = require(process.cwd())
const fs = require("fs")
const glob = require("glob")

let selectors
let classnames

const classPatterns = [
  // HTML class attributes
  /class="([^"]+)"/ig,
  // assume that ERB helpers generate an element with the same class
  /<%= (\w+)\b/g,
]

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
  const files = sources.reduce((acc, pattern) => {
    return acc.concat(glob.sync(pattern))
  }, [])

  files.forEach(file => {
    let match = null
    const content = fs.readFileSync(file, "utf8")

    classPatterns.forEach(pattern => {
      // match each pattern against the source
      while (match = pattern.exec(content)) {
        // get the matched classnames and split by whitespace into classes
        const klasses = match[1].trim().split(/\s+/)
        classes.push(...klasses)
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
