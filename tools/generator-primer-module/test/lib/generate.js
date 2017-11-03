const yo = require('yeoman-test')
const path = require('path')

const APP_PATH = path.join(__dirname, '../../app')

// default CLI positional arguments
const TEST_ARGS = []

// default CLI flags
const TEST_OPTS = {
  "dependents": false,
  "todo": false
}

// default prompt answers, so we can call generate() w/out any arguments and
// still get something useful
const TEST_PROMPTS = {
  "module": "primer-test"
}

/**
 * Run the generator with an optional config that provides CLI options
 * ("options"), positional arguments ("args"), and prompt answers ("prompts")
 * in a temp directory. The return promise resolves with a function that acts
 * like `path.join()` but prefixes the provided path parts with the path to the
 * generated module directory, e.g.
 *
 * const generate = require("./lib/generate")
 * generate().then(path => {
 *   console.log("generated package.json:", path("package.json"))
 * })
 *
 * // pass the module name as a positional argument
 * generate({
 *   args: ["primer-xyz"]
 * })
 *
 * // or as a prompt answer
 * generate({
 *   prompts: {"module": "primer-xyz"}
 * })
 */
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
      // return a path function that joins to the temp dir and the module name
      // with the provided path parts
      return (...args) => path.join(tmpDir, prompts.module, ...args)
    })
}
