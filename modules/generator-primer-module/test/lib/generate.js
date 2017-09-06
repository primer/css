const yo = require('yeoman-test')
const path = require('path')

const APP_PATH = path.join(__dirname, '../../app')

// default options, (positional) arguments, and prompts for all tests
const TEST_OPTS = {test: true}
const TEST_ARGS = []
const TEST_PROMPTS = {module: "primer-test"}

module.exports = (config={}) => {
  const options = Object.assign({}, TEST_OPTS, config.options)
  const args = config.args || TEST_ARGS
  const prompts = Object.assign({}, TEST_PROMPTS, config.prompts)
  return yo.run(APP_PATH)
    .withOptions(options)
    .withArguments(args)
    .withPrompts(prompts)
    .inTmpDir()
    .then(tmpDir => {
      // return a path function that joins to the temp dir
      return (...args) => path.join(tmpDir, prompts.module, ...args)
    })
}
