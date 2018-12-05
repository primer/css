const each = require('./each')

const START = /<\!-- *%docs *\n/
const SPLIT = /\n *-->/
const END = /<\!-- *%enddocs *-->/

module.exports = function parseDocComments() {
  return each((path, file) => {
    const str = String(file.contents)
    let parts = str.split(START)
    if (parts.length > 1) {
      // FIXME metadata should either be in frontmatter or %docs comment
      if (str.match(/^---/)) {
        throw new Error(`Whoops, can't parse doc comments *and* frontmatter!`)
      }

      // take the part between the start and end
      const middle = parts[1].split(END)[0]
      // split *that* on the split "marker"
      parts = middle.split(SPLIT)
      // the part before that is the "frontmatter"
      // and everything after that is the actual docs
      const [meta, docs] = parts
      file.contents = Buffer.from(`---\n${meta}\n---\n${docs}`)
    }
  })
}
