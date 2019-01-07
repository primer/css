const {readFileSync} = require('fs')

module.exports = function addChangelog(sourcePath, destPath, transform = noop) {
  return (files, metal, done) => {
    const path = metal.path(metal.source(), sourcePath)
    const file = {
      contents: readFileSync(path),
      path: destPath
    }
    transform(file)
    files[destPath] = file
    done()
  }
}

function noop() {
}
