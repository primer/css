const each = require('./each')
const START = /<!-- *%docs *\n/
const SPLIT = /\n *-->/
const END = /<!-- *%enddocs *-->/

module.exports = function parseDocComments({log = noop}) {
  return each((file, path) => {
    const str = String(file.contents)

    let parts = str.split(START)
    if (parts.length > 1) {
      // metadata should either be in frontmatter _or_ %docs comment;
      // it's too tricky to reconcile them here
      if (str.indexOf('---') === 0) {
        log('unable to parse doc comments from', path, '(existing frontmatter)')
        return
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

function noop() {}
