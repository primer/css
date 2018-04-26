const build = require('./lib/build')

function InputException(message) {
  this.message = message
  this.name = "InputException"
}

module.exports = str => {
  if (!str.input || str.input.length === 0) {
    throw new InputException("You must supply a file to build")
  }

  if (!str.input[0].match(/\.scss$/)) {
    throw new InputException("We are only able to handle .scss files")
  }

  build(str.input[0], str.flags)
}
