module.exports = function each(fn) {
  return (files, metal, done) => {
    for (const path of Object.keys(files)) {
      fn(files[path], path, metal)
    }
    done()
  }
}
