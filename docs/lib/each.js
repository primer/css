module.exports = function each(fn) {
  return (files, metal, done) => {
    for (const [path, file] of Object.entries(files)) {
      fn(path, file, files, metal)
    }
    done()
  }
}
