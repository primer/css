const minimatch = require('minimatch')

module.exports = function rename(patterns, debug) {
  const ops = Object.keys(patterns).map(pattern => {
    const match = path => minimatch(path, pattern)
    const getPath = compile(patterns[pattern], pattern)
    return (path, file, files) => {
      if (!match(path)) return

      const newPath = getPath(path, file, pattern)
      if (newPath === false) {
        delete files[path]
        return
      } else if (newPath === path) {
        return
      }

      // debug && console.warn('-', path)
      delete files[path]
      if (newPath) {
        debug && console.warn('*', path, '->', newPath)
        files[newPath] = file
        file.path = newPath
      }
    }
  })
  return (files, metal, done) => {
    for (const op of ops) {
      for (const [path, file] of Object.entries(files)) {
        op(path, file, files)
      }
    }
    done()
  }
}

const noop = () => undefined

function compile(filename, pattern) {
  switch (typeof filename) {
    case 'function':
      return filename
    case 'string':
      return () => filename
    default:
      return noop
  }
}
