module.exports = function filterBy(fn) {
  return (files, metal, done) => {
    for (const [key, file] of Object.entries(files)) {
      if (!fn(file, key, metal)) {
        delete files[key]
      }
    }
    done()
  }
}
