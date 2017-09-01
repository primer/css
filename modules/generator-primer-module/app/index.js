const chalk = require("chalk")
const fse = require("fs-extra")
const path = require("path")
const Generator = require("yeoman-generator")
const capitalize = require("./lib/capitalize")

const stripPrimerPrefix = str => str.replace(/^primer-/, "")

module.exports = class PrimerModule extends Generator {

  initializing() {
    this.log("It looks like you are adding a new Primer module!")

    this.argument("module", {
      desc: "The name of your module (on npm)",
      type: String,
      required: false,
    })

    // assign defaults
    Object.assign(this.options, {
      type: "css",
      status: "Experimental",
    })
  }

  prompting() {
    if (this.options.module) {
      this.log("Great, let's get you started with %s...", this.options.module)
    }

    let prompts = [
      {
        name: "module",
        message: "What should the module name be (on npm)?",
        type: "input",
      },
      {
        name: "title",
        message: "What should the title be (for humans)?",
        type: "input",
        default: (answers) => {
          return capitalize(
            stripPrimerPrefix(answers.module || this.options.module)
          )
        },
      },
      {
        name: "description",
        message: "Describe your module in a single sentence. (This will go into the package.json and README.md.)",
        type: "input",
        default: "TODO: fill in this description later",
      },
      {
        name: "dependents",
        message: "Which meta-package(s) should we add this to?",
        type: "checkbox",
        choices: [
          "primer-css",
          "primer-core",
          "primer-product",
          "primer-marketing",
        ],
        default: ["primer-css"],
      },
      {
        type: "input",
        message: "Where can we find the docs? (We'll read this file from the path you provide.)",
        name: "docs",
        validate: (filePath) => {
          if (!filePath) {
            return true
          }
          return fse.exists(filePath)
            .then(exists => {
              return exits ||
                `No such file: "${filePath}" in ${process.cwd()}`
            })
        },
      },
    ]

    // remove prompts for which arguments were already provided
    prompts = prompts.filter(prompt => {
      return !(prompt.name in this.options)
    })

    return this.prompt(prompts)
      .then(answers => {
        Object.assign(this.options, answers)
      })
  }

  configuring() {
    this.options.dependencies = this._getDependencies()
    if (this.options.docs) {
      return fse.readFile(this.options.docs, "utf8")
        .then(docs => this.options.docs = docs)
    }
  }

  paths() {
    this.basePath = this.destinationPath(this.options.module)
  }

  writing() {
    this.log("creating: %s", chalk.green(this.basePath))

    const data = [
      "module",
      "dependencies",
      "description",
      "docs",
      "status",
      "title",
      "type",
    ].reduce((acc, key) => {
      acc[key] = this.options[key]
      return acc
    }, {})

    // this.log("data:", JSON.stringify(data, null, "  "))

    // copy the whole directory with each file treated as
    // an EJS template
    this.fs.copyTpl(
      this.templatePath(),
      this.basePath,
      data
    )

    // rename lib/module.scss to lib/{name}.scss, where
    // {name} is the module name without the "primer-" prefix
    const name = stripPrimerPrefix(this.options.module)
    const src = path.join(this.basePath, "lib/module.scss")
    const dest = src.replace("module.scss", `${name}.scss`)
    this.fs.move(src, dest)
  }

  install() {
    const pkg = this.fs.readJSON(
      path.join(this.basePath, "package.json")
    )
    // this.log("package:", pkg.name, "@", pkg.version)

    if (this.options.test !== true) {
      this.options.dependents.forEach(dependent => {
        this._addAsDependencyTo(pkg, dependent)
      })
    }
  }

  end() {
    this.log(
      "\n%s\n\n%s",
      chalk.green("Ready to roll!"),
      chalk.yellow("Remember to fill in real stuff if you have any TODOs listed below:")
    )
    if (this.options.test !== true) {
      this.spawnCommandSync("ack", ["TODO", this.basePath], {
        stdio: "inherit",
      })
    }
  }

  _getDependencies() {
    return [
      "primer-support",
    ].reduce((deps, module) => {
      deps[module] = require(`${module}/package.json`)
      return deps
    }, {})
  }

  _addAsDependencyTo(pkg, dest) {
    this.log(
      "adding %s@%s as a dependency to %s...",
      pkg.name, pkg.version, dest,
      pkg
    )

    const destPath = require.resolve(
      path.join(dest, "package.json")
    )

    this.fs.extendJSON(destPath, {
      dependencies: {
        [pkg.name]: pkg.version,
      },
    })
  }
}
