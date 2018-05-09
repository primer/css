const build = require('./lib/build')

function InputException(message) {
  this.message = message
  this.name = "InputException"
}

module.exports = ({input, flags}) => {
  if (!input || input.length === 0) {
    throw new InputException("You must supply a file to build")
  }

  const [file] = input
  if (!file.match(/\.scss$/)) {
    throw new InputException("We are only able to handle .scss files")
  }

  return build(file, flags)
}
