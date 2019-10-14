const semver = require('semver')
const stylelint = require('stylelint')

const ruleName = 'primer-css/TODO'
const pattern = /\bTODO@([^:]+):\s+(.+)$/

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: message => message
})

module.exports = stylelint.createPlugin(ruleName, (enabled, options = {}) => {
  const {currentVersion} = options
  if (!currentVersion) {
    console.warn(`No "currentVersion" supplied to ${ruleName}; bailing`)
    return () => null
  }

  let match
  return (root, result) => {
    root.walkComments(node => {
      if ((match = node.text.match(pattern))) {
        const [substr, todoVersion, message] = match
        if (semver.lte(todoVersion, currentVersion)) {
          stylelint.utils.report({
            message: messages.rejected(`Unresolved TODO comment: "${message}" (expected to be resolved in "${todoVersion}")`),
            node,
            result,
            ruleName
          })
        }
      }
    })
  }
})
