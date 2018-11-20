const UTILITY_CLASS_PATTERN = /\.[-\w]+/g

module.exports = function matchUtilities(selector) {
  return selector.match(UTILITY_CLASS_PATTERN)
}
