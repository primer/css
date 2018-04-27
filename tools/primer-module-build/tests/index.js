const test = require("ava")
const build = require("../lib/build.js")

test("builds test css", t => {
  return build("./tests/test.scss", {})
    .then(files => t.truthy(files))
})
