const test = require("ava")
const assert = require("yeoman-assert")
const fse = require("fs-extra")
const Path = require("path")
const generate = require("./lib/generate")

// XXX: this is required to work around the low EventEmitter default of 10 max
// listeners, above which it starts to complain that there's a memory leak
// <https://github.com/npm/npm/issues/13806#issuecomment-257843863>
require('events').EventEmitter.defaultMaxListeners = 100;

test("file scaffolding", t => {
  const module = "primer-test"
  return generate({prompts: {module}})
    .then(path => {
      const pkg = path("package.json")
      assert.file(pkg)
      assert.jsonFileContent(pkg, {name: module},
                             "Wrong module name in package.json")
      assert.jsonFileContent(pkg, {version: "0.0.1"},
                             "Wrong or empty version in package.json")

      const readme = path("README.md")
      assert.file(readme)
      assert.fileContent(readme, /# Primer CSS \/ Test/)
      assert.fileContent(readme, `npmjs.org/package/${module}`)
      assert.fileContent(readme, `npm install --save ${module}`)

      assert.file(path("lib/test.scss"))

      t.pass("All the files exist.")
    })
})

test("default title", t => {
  const titles = {
    "primer-test": "Test",
    "primer-foo-bar": "Foo Bar",
  }
  t.plan(Object.keys(titles).length)
  return Promise.all(
    Object.keys(titles).map(module => {
      const title = titles[module]
      return generate({prompts: {module}})
        .then(path => {
          const readme = path("README.md")
          assert.fileContent(readme, `\ntitle: ${title}\n`)
          t.pass("module: '%s' => title: '%s'", module, title)
        })
    })
  )
})

test("missing description gets a TODO", t => {
  return generate().then(path => {
    assert.jsonFileContent(path("package.json"), {description: /TODO/})
    t.pass("TODO in the package.json description")
  })
})

test("primer.category is set", t => {
  const values = ["core", "product", "marketing", "meta", ""]
  t.plan(values.length)
  return Promise.all(
    values.map(category => {
      return generate({prompts: {category}})
        .then(path => {
          assert.jsonFileContent(path("package.json"), {
            primer: {category}
          })
          t.pass(category)
        })
    })
  )
})

test("primer.module_type is set", t => {
  const values = [
    "components",
    "objects",
    "utilities",
    "meta",
    "",
  ]
  t.plan(values.length)
  return Promise.all(
    values.map(module_type => {
      return generate({prompts: {module_type}})
        .then(path => {
          assert.jsonFileContent(path("package.json"), {
            primer: {module_type}
          })
          t.pass(module_type)
        })
    })
  )
})

test("status: Experimental is written to %docs comment", t => {
  return generate().then(path => {
    assert.fileContent(path("README.md"), "\nstatus: Experimental\n")
    t.pass("status: Experimental")
  })
})

test("repository path is set properly", t => {
  const module = "primer-xyz"
  return generate({prompts: {module}})
    .then(path => {
      assert.jsonFileContent(path("package.json"), {
        repository: `https://github.com/primer/primer-css/tree/master/modules/${module}`,
      })
      t.pass()
    })
})

test("README description gets a TODO w/o prompt answer", t => {
  return generate().then(path => {
    assert.fileContent(path("README.md"), "> TODO:")
    t.pass()
  })
})

test("docs get a TODO w/o prompt answer", t => {
  return generate().then(path => {
    assert.fileContent(path("README.md"), "TODO: Write some documentation")
    t.pass()
  })
})

test("docs are filled in with file contents", t => {
  const readme = Path.join(__dirname, "fixtures", "docs.md")
  return fse.readFile(readme, "utf8")
    .then(content => {
      return generate({prompts: {docs: readme}}).then(path => {
        assert.fileContent(path("README.md"), content)
        t.pass()
      })
    })
})

test("index.scss imports lib/{module}.scss", t => {
  const module = "primer-select-menu"
  const lib = "select-menu"
  return generate({prompts: {module}})
    .then(path => {
      assert.fileContent(path("index.scss"), `@import "./lib/${lib}.scss";`)
      t.pass()
    })
})
