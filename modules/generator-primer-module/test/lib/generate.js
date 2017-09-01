const yo = require('yeoman-test')
const path = require('path')

const APP_PATH = path.join(__dirname, '../../app')
// options, (positional) arguments, and prompts for all tests
const TEST_OPTS = {test: true}
const TEST_ARGS = []
const TEST_PROMPTS = {}

module.exports = (options) => {
  return yo.run(options.path || APP_PATH)
    .withOptions(Object.assign({}, TEST_OPTS, options.options))
    .withArguments((options.args || []).concat(TEST_ARGS))
    .withPrompts(Object.assign({}, TEST_PROMPTS, options.prompts))
    .inTmpDir(() => {})
    .then(dir => {
      // return a path function that joins to the temp dir
      return (...args) => path.join(dir, ...args)
    })
}
