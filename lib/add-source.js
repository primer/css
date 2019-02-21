const each = require('./each')

module.exports = function addSource(options = {}) {
  const {namespace = 'data'} = options
  for (const key of ['branch', 'repository']) {
    if (!options[key]) {
      throw new Error(`addSource() plugin requires options.${key} (got ${JSON.stringify(options[key])})`)
    }
  }
  const {branch, repository} = options
  return each((file, source) => {
    if (file[namespace]) {
      file[namespace].source = `${repository}/tree/${branch}/modules/${source}`
    }
  })
}
