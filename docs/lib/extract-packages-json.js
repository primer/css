module.exports = {extractPackages, writePackagesJSON}

function extractPackages(options = {}) {
  return (files, metal, done) => {
    const packages = {}
    for (const key of Object.keys(files)) {
      if (key.endsWith('package.json')) {
        const file = files[key]
        const pkg = JSON.parse(String(file.contents))
        const plucked = pluck(pkg, [
          'name',
          'description',
          'version'
        ])
        plucked.dependencies = pkg.dependencies
          ? Object.keys(pkg.dependencies)
          : []
        packages[pkg.name] = plucked
      }
    }
    const meta = metal.metadata()
    Object.assign(meta, {packages})
    done()
  }
}

function writePackagesJSON(options = {}) {
  const {path = 'packages.json'} = options
  return (files, metal, done) => {
    const {packages} = metal.metadata()
    files[path] = {
      contents: JSON.stringify(packages, null, 2)
    }
    done()
  }
}

function pluck(obj, keys) {
  const plucked = {}
  for (const key of keys) {
    plucked[key] = obj[key]
  }
  return plucked
}
