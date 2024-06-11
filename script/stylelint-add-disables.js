#!/usr/bin/env -S NODE_NO_WARNINGS=1 node
// Disables stylelint rules in SASS/CSS files with next-line comments. This is
// useful when introducing a new rule that causes many failures. The comments
// can be fixed and removed at while updating the file later.
//
// Usage:
//
//  script/stylelint-add-disables.js src/**/*.scss

import fs from 'fs'
import {execFile} from 'child_process'

execFile('stylelint', ['--quiet', '--formatter', 'json', process.argv[2]], (error, stdout, stderr) => {
  for (const result of JSON.parse(stdout || stderr || '[]')) {
    const filename = result.source
    const jsLines = fs.readFileSync(filename, 'utf8').split('\n')
    const offensesByLine = {}
    let addedLines = 0

    // Produces {47: ['github/no-d-none', 'github/no-blur'], 83: ['github/no-blur']}
    for (const message of result.warnings) {
      if (offensesByLine[message.lin] && offensesByLine[message.line].includes(message.rule)) {
        continue
      } else if (offensesByLine[message.line]) {
        offensesByLine[message.line].push(message.rule)
      } else {
        offensesByLine[message.line] = [message.rule]
      }
    }

    for (const line of Object.keys(offensesByLine)) {
      const lineIndex = Number(line) - 1 + addedLines
      const previousLine = jsLines[lineIndex - 1]
      const ruleIds = Array.from(new Set(offensesByLine[line])).join(', ')
      if (isDisableComment(previousLine)) {
        if (previousLine.match(/\s?\*\/$/)) {
          jsLines[lineIndex - 1] = previousLine.replace(/\s?\*\/$/, `, ${ruleIds} */`)
        } else {
          jsLines[lineIndex - 1] = `${jsLines[lineIndex - 1]}, ${ruleIds}`
        }
      } else {
        const leftPad = ' '.repeat(jsLines[lineIndex].match(/^\s*/g)[0].length)
        jsLines.splice(lineIndex, 0, `${leftPad}// stylelint-disable-next-line ${ruleIds}`)
        addedLines += 1
      }
    }

    if (result.warnings.length !== 0) {
      fs.writeFileSync(filename, jsLines.join('\n'), 'utf8')
    }
  }
})

function isDisableComment(line) {
  return line && line.match(/\/(\*|\/) stylelint-disable(-next-line)? .+(\*\/)?/)
}
