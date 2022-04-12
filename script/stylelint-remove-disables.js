#!/usr/bin/env node
import {execFile} from 'child_process'
import {readFileSync, writeFileSync} from 'fs'

const files = process.argv.slice(2)
if (files.length === 0) {
  files.push('app/assets/stylesheets')
}

// we use an empty "marker" to delineate removed lines
const REMOVED = `===REMOVED@${Date.now()}===`

execFile('stylelint', ['--rd', '--quiet', '--formatter', 'json', process.argv[2]], (error, stdout) => {

  // Filter to only needless disables comments
  const results = JSON.parse(stdout)
    .filter(result => result.warnings.length > 0)
    .map(({source, warnings}) => {
      return {
        source,
        warnings: warnings.filter(warning => warning.rule === '--report-needless-disables')
      }
    })

  for (const {source, warnings} of results) {
    console.log(`--- ${source}\n+++ ${source}`)
    const lines = readFileSync(source, 'utf8').split(/\n/)
    for (const {text, line: lineNum} of warnings) {
      const ruleName = text.match(/^Needless disable for "(.+)"$/)[1]
      const line = lines[lineNum - 1]
      let disableComment = parseDisableComment(line)

      if (disableComment) {
        const rules = new Set(disableComment.rules)
        rules.delete(ruleName)
        let replacementLine = line
        if (rules.size === 0) {
          console.log(`@@ ${lineNum},${lineNum - 1} @@`)
          replacementLine = line.replace(`// ${disableComment.content}`, REMOVED)
        } else {
          console.log(`@@ ${lineNum},${lineNum} @@`)
          replacementLine = line.replace(disableComment.content, `${disableComment.type} ${Array.from(rules).join(', ')}`)
        }
        lines[lineNum - 1] = replacementLine

        if (lines[lineNum - 2]) {
          console.log(`${lines[lineNum - 2]}`)
        }
        console.log(`- ${line}`)
        if (!replacementLine.includes(REMOVED)) {
          console.log(`+ ${replacementLine}`)
        }
        if (lines[lineNum]) {
          console.log(`${lines[lineNum]}`)
        }
      }
    }
    console.log('')
    const output = lines.map(line => {
      if (line.trim() === REMOVED) {
        return null
      } else if (line.includes(REMOVED)) {
        line = line.replace(REMOVED, '').trimEnd()
      }

      return line
    }).filter(line => line !== null).join('\n')

    writeFileSync(source, output, 'utf8')
  }
})

function parseDisableComment(str) {
  const match = str.match(/(stylelint-disable((-next)?-line)?)\s+(.+)$/)
  return match
    ? {
        content: match[0],
        type: match[1],
        rules: match[4].split(/,\s+/)
      }
    : false
}
