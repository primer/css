var stylelint = require("stylelint")
var sass = require("node-sass")
var postcss = require("postcss")

var ruleName = "primer/selector-no-utility"
var messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: "Avoid styling the utilty class",
})

function buildUtilityClasses(options) {
  var utilityClasses = []

  if (options == null) {
    options = {}
  }

  var sassresult = sass.renderSync({
    data: options["data"] || "@import \"primer-utilities/index.scss\";",
    includePaths: [ "node_modules/" ].concat(options["include-paths"])
  })

  // post css walking
  var utilRoot = postcss.parse(sassresult.css.toString())
  utilRoot.walkRules(function(rule) {
    utilityClasses = utilityClasses.concat(rule.selectors)
  })

  return utilityClasses
}

module.exports = stylelint.createPlugin(ruleName, function(enabled, options) {
  return function(root, result) {

    var utilityClasses = buildUtilityClasses(options)

    if (utilityClasses.length == 0) {
      return
    }

    root.walkRules(function(rule) {

      var ruleClasses = rule.selector.split(" ")

      for (var i = 0; i < ruleClasses.length; i++) {
        if (utilityClasses.indexOf(ruleClasses[i]) >= 0) {
          stylelint.utils.report({
            message: messages.rejected,
            node: rule,
            result: result,
            ruleName: ruleName
          })
        }
      }
    })
  }
})

module.exports.ruleName = ruleName
module.exports.messages = messages
