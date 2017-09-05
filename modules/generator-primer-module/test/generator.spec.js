const test = require("ava")
const assert = require("yeoman-assert")
const generate = require("./lib/generate")

test("file scaffolding", t => {
  const module = "primer-test"
  return generate({
      prompts: {
        module,
      },
    })
    .then(path => {

      const pkg = path(module, "package.json")
      assert.file(pkg)
      assert.jsonFileContent(pkg, {name: module},
                             "Wrong module name in package.json")
      assert.jsonFileContent(pkg, {version: "0.0.1"},
                             "Wrong or empty version in package.json")

      const readme = path(module, "README.md")
      assert.file(readme)
      assert.fileContent(readme, /# Primer .* Test/)
      assert.fileContent(readme, `npmjs.org/package/${module}`)
      assert.fileContent(readme, `npm install --save ${module}`)

      assert.file(path(module, "lib/test.scss"))

      t.pass("All the files exist!")
    })
})
