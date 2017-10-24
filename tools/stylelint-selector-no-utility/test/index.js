var testRule = require("stylelint-test-rule-tape")
var rule = require("..")

testRule(rule.rule, {
  ruleName: rule.ruleName,
  config: true,
  skipBasicChecks: true,
  accept: [
    {
      code: "a {  }"
    }
  ],
  reject: [
    {
      code: ".m-0 { color: #fff; }"
    },
    {
      code: ".m-0:hover { color: #fff; }"
    },
    {
      code: ".m-2, .foo { color: #fff; }"
    },
    {
      code: ".m-2[type=button] { color: #fff; }"
    },
    {
      code: ".foo.m-0 { color: #fff; }"
    }
  ]
})
