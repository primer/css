// FIXME this should go away when we merge and release:
// <https://github.com/primer/primer-module-build/pull/19>
const plugins = require("primer-module-build/lib/.postcss.json")
delete plugins.use

module.exports = {
  plugins,
}
