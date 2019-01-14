module.exports = function rename(fn, options = {}) {
  const {log = noop} = options
  return (files, metal, done) => {
    for (const [key, file] of Object.entries(files)) {
      let dest = fn(file, key, files, metal)
      if (dest === true) {
        log(`[rename] keep: ${key}`)
      } else if (dest && dest !== key) {
        log(`[rename] ${key} -> ${dest}`)
        file.path = dest
        files[dest] = file
        delete files[key]
      } else if (dest === false) {
        log(`[rename] delete ${key}`)
        delete files[key]
      }
    }
    done()
  }
}

function noop() {}
