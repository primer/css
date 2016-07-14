const config = require("../")
const stylelint = require("stylelint")
const test = require("ava")

const validCss =
`.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }
`

const invalidCss =
`a {
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
    const { errored, results } = data
    const { warnings } = results[0]
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
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "errored")
    t.is(warnings.length, 1, "flags one warning")
    t.is(warnings[0].text, "Expected a leading zero (number-leading-zero)", "correct warning text")
  })
})
