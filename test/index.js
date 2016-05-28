var testRule = require("stylelint-test-rule-tape")
var rule = require("..")

testRule(rule.rule, {
  ruleName: rule.ruleName,
  config: true,
  skipBasicChecks: true,
  accept: [
    { code: "a {  }" },
  ],
  reject: [
    { code: ".m-0 { color: #fff; }" }
  ]
})
