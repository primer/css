const each = require('./each')
const {existsSync} = require('fs')
const {dirname, join, resolve} = require('path')

const cache = {}

module.exports = function addPackageMeta(options) {
  return (files, metal, done) => {
    const root = metal.source()
    for (const [path, file] of Object.entries(files)) {
      file.package = getPackageRelativeTo(path, root)
    }
    done()
  }
}

function getPackageRelativeTo(path, root) {
  const pathDir = join(root, dirname(path))
  if (pathDir in cache) {
    return cache[pathDir]
  }
  let dir = pathDir
  while (dir !== root) {
    const pkgPath = join(dir, 'package.json')
    if (existsSync(pkgPath)) {
      return (cache[dir] = require(pkgPath))
    }
    dir = resolve(dir, '..')
  }
  console.warn('no package.json found:', dir)
}
