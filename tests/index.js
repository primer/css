const config = require("../")
const stylelint = require("stylelint")
const test = require("ava")

const validCss =
`.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }
`

const invalidCss =
`.foo {
  color: #fff;
  top: .2em;
}
`

test("stylelint runs with config", t => {
  return stylelint.lint({
    code: "a { font-weight: bold; }",
    config: config
  })
    .then(data => {
      t.truthy(true, "config works")
      t.truthy(data, "data exists")
    })
})

test("no warnings with valid css", t => {
  return stylelint.lint({
    code: validCss,
    config: config,
  })
    .then(data => {
      const {errored, results} = data
      const {warnings} = results[0]
      t.falsy(errored, "no errored")
      t.is(warnings.length, 0, "flags no warnings")
    })
})

test("a warning with invalid css", t => {
  return stylelint.lint({
    code: invalidCss,
    config: config,
  })
    .then(data => {
      const {errored, results} = data
      const {warnings} = results[0]
      t.truthy(errored, "errored")
      t.is(warnings.length, 2, "flags two warning")
      t.is(warnings[0].text, 'Expected "top" to come before "color" (order/properties-order)', "correct warning text")
      t.is(warnings[1].text, "Expected a leading zero (number-leading-zero)", "correct warning text")
    })
})

test("No deprecated config", t => {
  return stylelint.lint({
    code: "",
    config: config,
    syntax: "scss"
  })
    .then(data => {
      const {errored, results} = data
      t.falsy(errored, "errored")
      t.not(results.length, 0, "Did not find any resutls")
      t.is(results[0].deprecations.length, 0, `Expected there to be no deprecated config warnings. Please fix these:\n\n${results[0].deprecations.map(d => d.text).join("\n")}`)
    })
})
