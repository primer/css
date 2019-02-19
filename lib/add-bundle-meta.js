const {existsSync} = require('fs')
const {dirname, join, resolve} = require('path')

const cache = {}

module.exports = function addBundleMeta(options = {}) {
  const {namespace = 'data', log = noop} = options
  return (files, metal, done) => {
    const root = metal.source()
    for (const [path, file] of Object.entries(files)) {
      const bundle = getBundleRelativeTo(path, root)
      log(`[meta] ${path} bundle: "${bundle}"`)
      file[namespace].bundle = bundle
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
