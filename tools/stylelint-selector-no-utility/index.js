const stylelint = require('stylelint')

const ruleName = 'primer/selector-no-utility'
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: classname => `Avoid styling the utilty class "${classname}"`
})

const match = require('./match')
const utilityClasses = require('./classes.json')

module.exports = stylelint.createPlugin(ruleName, enabled => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: enabled,
      possible: [true, false]
    })

    if (!validOptions) {
      return
    }

    root.walkRules(rule => {
      const matches = match(rule.selector)
      if (!matches) {
        return
      }
      for (const ruleClass of Array.from(matches)) {
        if (utilityClasses.indexOf(ruleClass) >= 0) {
          stylelint.utils.report({
            message: messages.rejected(ruleClass),
            node: rule,
            result,
            ruleName
          })
        }
      }
    })
  }
})

module.exports.ruleName = ruleName
module.exports.messages = messages
