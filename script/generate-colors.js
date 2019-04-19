#!/usr/bin/env node

const colors = require('primer-colors')
const write = console.log

const hues = {}
for (const [name, value] of Object.entries(colors)) {
  if (Array.isArray(value)) {
    const mapName = `${name}s`
    writeArray(mapName, value)
    for (const index of Object.keys(value)) {
      writeVariable(`${name}-${index}00`, `map-get($${mapName}, ${index})`)
    }
    hues[name] = `$${mapName}`
    write('')
  } else {
    writeVariable(name, value)
  }
}

writeArray('hue-map', hues)

function writeVariable(name, value) {
  write(`$${name}: ${value} !default;`)
}

function writeArray(name, value) {
  write(`$${name}: (${Object.entries(value).map(formatArrayEntry).join('')}\n) !default;\n`)
}

function formatArrayEntry([index, value]) {
  return `\n  ${index}: ${value},`
}
