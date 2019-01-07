const matter = require('gray-matter')
const each = require('./each')

module.exports = function writeMeta({namespace = 'data'}) {
  return each(file => {
    const data = file[namespace]
    if (data) {
      file.contents = matter.stringify(String(file.contents), data)
    }
  })
}
