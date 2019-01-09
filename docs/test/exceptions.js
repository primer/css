const {yellow, green, red} = require('colorette')

/**
 * Each exception type may resolve to either:
 *
 * 1. A string, which will be treated as a message listed alongside the
 *    "excepted" path; or
 *
 * 2. A function in the form: `f(paths) : {pass:Boolean, message:String}`
 *
 * In the case of `moved(path)`, it returns a _function_ that checks for
 * whether the provided path exists in `paths` and returns the appropriate
 * status object with `pass` and `message` props.
 */
module.exports = {
  removed: red('removed'),
  deprecated: yellow('deprecated'),
  redirect: url => `${green('redirect')} → ${url}`,
  moved: path => paths => {
    if (paths.includes(path)) {
      return {pass: true, message: `→ ${green(path)}`}
    } else {
      return {pass: false, message: `→ ${red(path)} is missing`}
    }
  }
}
