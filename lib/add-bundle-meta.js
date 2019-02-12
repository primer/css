const {existsSync} = require('fs')
const {dirname, join, resolve} = require('path')

const cache = {}

module.exports = function addPackageMeta(options = {}) {
  const {fields, namespace = 'data', log = noop} = options
  return (files, metal, done) => {
    const root = metal.source()
    for (const [path, file] of Object.entries(files)) {
      file[namespace].bundle = getBundleRelativeTo(path, root)
    }
    done()
  }
}

function getBundleRelativeTo(file, root) {
  let dir = join(root, dirname(file))
  if (dir in cache) {
    return cache[dir]
  }
  while (dir !== root) {
    const indexPath = join(dir, 'index.scss')
    if (existsSync(indexPath)) {
      return (cache[dir] = getPathName(indexPath.substr(root.length + 1)))
    }
    dir = resolve(dir, '..')
  }
  return false
}

function getPathName(path) {
  return dirname(path).replace(/\//g, '-')
}

function noop() {}
