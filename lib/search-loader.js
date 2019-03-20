const grayMatter = require('gray-matter')
const fs = require('fs')
const {join} = require('path')

const searchIndex = {}
const searchIndexPath = join(process.cwd(), 'searchIndex.js')

module.exports = function(source) {
  const {data, content} = grayMatter(source)
  searchIndex[data.path] = Object.assign({title: data.title, path: data.path, keywords: data.keywords}, {content})
  fs.writeFileSync(searchIndexPath, `export default ` + JSON.stringify(searchIndex, null, 2), 'utf8')
  return source
}

module.exports.searchIndexPath = searchIndexPath
