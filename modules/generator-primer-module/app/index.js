const chalk = require("chalk")
const fse = require("fs-extra")
const path = require("path")
const Generator = require("yeoman-generator")

const stripPrimerPrefix = require("./lib/strip-prefix")

const OPTIONS = require("./options")

module.exports = class PrimerModule extends Generator {

  constructor(args, opts) {
    super(args, opts)

    // initialize positional arguments and option flags
    Object.entries(OPTIONS).forEach(([name, val]) => {
      if (val.argument) {
        this.argument(name, Object.assign(val.argument, {name}))
      } else if (val.option) {
        const option = Object.assign(val.option, {name})
        if (name.includes("_")) {
          const alias = name.replace(/_/g, "-")
          option.alias = option.alias
            ? [alias].concat(option.alias)
            : alias
        }
        this.option(name, option)
      }
    })
  }

  initializing() {
    // this.log("It looks like you are adding a new Primer module!")
  }

  prompting() {
    if (this.options.module) {
      this.log(
        "Okay, let's get you started with %s...",
        chalk.green(this.options.module)
      )
    }

    // filter out options without prompts, and which already
    // have options set, then add back the "name" key to each
    const prompts = Object.entries(OPTIONS)
      .filter(([name, {prompt}]) => {
        return prompt && (
          prompt.when === true || typeof this.options[name] === "undefined"
        )
      })
      .map(([name, {prompt}]) => {
        // bind functions to the generator as `this`
        Object.keys(prompt).forEach(key => {
          if (typeof prompt[key] === "function") {
            prompt[key] = prompt[key].bind(this)
          }
        })
        return Object.assign(prompt, {name})
      })

    // remove prompts for which arguments were already provided
    return this.prompt(prompts)
      .then(answers => {
        Object.assign(this.options, answers)
      })
  }

  configuring() {
    this.dependencies = this._getDependencies()
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

    const data = {
      "dependencies": this.dependencies,
    }

    Object.assign(
      data,
      Object.entries(OPTIONS)
        .map(([name, value]) => [name, this.options[name]])
        .reduce((acc, [name, value]) => {
          acc[name] = value
          return acc
        }, {})
    )

    if (this.options.verbose) {
      const debugData = Object.assign({}, data, {
        "dependencies": Object.keys(data.dependencies),
      })
      console.warn(chalk.green("data:"), JSON.stringify(debugData, null, "  "))
    }

    // for the index.scss import
    data.lib = stripPrimerPrefix(data.module)

    // copy the whole directory with each file treated as
    // an EJS template
    this.fs.copyTpl(
      this.templatePath(),
      this.basePath,
      data
    )

    const src = path.join(this.basePath, "lib/module.scss")
    const dest = src.replace("module.scss", `${data.lib}.scss`)
    this.fs.move(src, dest)
  }

  install() {
    const pkg = this.fs.readJSON(
      path.join(this.basePath, "package.json")
    )
    // this.log("package:", pkg.name, "@", pkg.version)

    const dependents = this.options.dependents
    if (Array.isArray(dependents)) {
      dependents.forEach(dependent => {
        this._addAsDependencyTo(pkg, dependent)
      })
    } else {
      this.log(chalk.red("No dependents!"), dependents)
    }
  }

  end() {
    if (this.options.todo === true) {
      this.log(
        "\n📝 ",
        chalk.bold("Remember to fill in any remaining TODOs below:"),
        "\n"
      )
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
      pkg.name, pkg.version, dest
    )

    const destPath = require.resolve(
      path.join("../../", dest, "package.json")
    )

    this.fs.extendJSON(destPath, {
      dependencies: {
        [pkg.name]: pkg.version,
      },
    })
  }
}
