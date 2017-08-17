const plugins = require("primer-module-build/lib/.postcss.json")
delete plugins.use

module.exports = {
  plugins,
}
