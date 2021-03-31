const {join} = require('path')

const distPath = join(__dirname, '../../dist')

function currentVersionDeprecations() {
  require(join(distPath, './deprecations.json'))
}

module.exports = {
  currentVersionDeprecations
}
