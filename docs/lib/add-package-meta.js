const {existsSync} = require('fs')
const {dirname, join, resolve} = require('path')

const cache = {}

module.exports = function addPackageMeta(options = {}) {
  const {fields, namespace = 'data', log = noop} = options
  return (files, metal, done) => {
    const root = metal.source()
    for (const [path, file] of Object.entries(files)) {
      const pkg = getPackageRelativeTo(path, root)
      if (pkg) {
        file[namespace].package = fields ? pluck(pkg, fields) : pkg
      } else {
        log('no package.json found relative to', path)
      }
    }
    done()
  }
}

function getPackageRelativeTo(file, root) {
  let dir = join(root, dirname(file))
  if (dir in cache) {
    return cache[dir]
  }
  while (dir !== root) {
    const pkgPath = join(dir, 'package.json')
    if (existsSync(pkgPath)) {
      return (cache[dir] = require(pkgPath))
    }
    dir = resolve(dir, '..')
  }
  return false
}

function pluck(data, fields) {
  return fields.reduce((out, field) => {
    out[field] = data[field]
    return out
  }, {})
}

function noop() {}
