const {join} = require('path')
const {writeFile} = require('fs-extra')
const utilities = require('primer-utilities')
const match = require('./match')

const classes = utilities.cssstats.selectors.values.reduce((set, selector) => {
  const matches = match(selector)
  if (matches) {
    for (const klass of Array.from(matches)) {
      set.add(klass)
    }
  }
  return set
}, new Set())

const data = JSON.stringify(Array.from(classes).sort(), null, 2)
const filename = join(__dirname, 'classes.json')

writeFile(filename, data, 'utf8')
  .then(() => console.warn(`wrote ${classes.size} classes to: ${filename}`))
  .catch(error => {
    console.error(error)
    process.exitCode = 1
  })
