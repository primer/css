const each = require('./each')

module.exports = function addSource(options = {}) {
  const {namespace = 'data'} = options
  for (const key of ['branch', 'repo']) {
    if (!options[key]) {
      throw new Error(`addSource() plugin requires options.${key} (got ${JSON.stringify(options[key])})`)
    }
  }
  const {branch, repo} = options
  return each((file, source) => {
    file[namespace].source = `https://github.com/${repo}/tree/${branch}/modules/${source}`
  })
}
