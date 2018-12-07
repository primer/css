const {join} = require('path')
const {existsSync, readFileSync, removeSync, writeFileSync} = require('fs')

module.exports = function gitIgnore(options = {}) {
  const {header, log = noop} = options
  if (!header) {
    throw new Error(`getIgnore(): the "header" is required (got: ${JSON.stringify(header)})`)
  }
  return (files, metal, done) => {
    const ignoreFile = join(metal.destination(), '.gitignore')
    // first, get the list of previously ignored files and remove them (sync)
    const ignored = getIgnored(ignoreFile, header, log)
    for (const file of ignored) {
      if (existsSync(file)) {
        removeSync(file)
      }
    }
    setIgnored(ignoreFile, Object.keys(files), header, log)
    done()
  }
}

function readLines(file, log = noop) {
  let content
  try {
    content = readFileSync(file, 'utf8')
  } catch (error) {
    log(`ignore file ${file} does not exist!`)
    return []
  }

  return content
    .trim()
    .split('\n')
    .map(line => line.trim())
}

function getIgnored(file, header, log = noop) {
  const lines = readLines(file)
  const headerIndex = lines.indexOf(header)
  if (headerIndex === -1) {
    log(`ignore file ${file} does not contain the automatically generated header`)
    return []
  }

  return lines.slice(headerIndex + 1).filter(line => line)
}

function setIgnored(file, files, header, log) {
  const lines = readLines(file, log)
  const headerIndex = lines.indexOf(header)
  if (headerIndex === -1) {
    lines.push(header)
  } else {
    lines.splice(headerIndex + 1)
  }
  lines.push(...files)
  writeFileSync(file, `${lines.sort().join('\n')}\n`, 'utf8')
}

function noop() {}
