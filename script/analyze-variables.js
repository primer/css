#!/usr/bin/env node
import postcss from 'postcss'
import {join} from 'path'
import fs from 'fs'
import atImport from 'postcss-import'
import syntax from 'postcss-scss'
import calc from 'postcss-calc'
import simpleVars from 'postcss-simple-vars'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const processor = postcss([
  atImport({path: ['src']}),
  collectVariables(),
  simpleVars({includePaths: [join(__dirname, '../src/support/variables')]})
])

async function analyzeVariables(fileName) {
  const contents = fs.readFileSync(fileName, 'utf8')

  const result = await processor.process(contents, {from: fileName, map: false, syntax})
  for (const message of result.messages) {
    if (message.plugin === 'postcss-simple-vars' && message.type === 'variable') {
      if (!result.variables[`$${message.name}`].values.includes(message.value)) {
        result.variables[`$${message.name}`].values.push(message.value)
      }
      let computed = message.value
      try {
        const c = `--temp-property: calc(${message.value})`.replace('round(', '(')
        computed = postcss().use(calc()).process(c).css
        computed = computed.replace('--temp-property: ', '')
      } catch (e) {
        // Couldn't calculate because value might not be a number
      }
      result.variables[`$${message.name}`].computed = computed
    }
  }
  return result.variables
}

function checkNode(node) {
  const allowedFuncts = ['var', 'round', 'cubic-bezier']
  const funcMatch = node.value.match(/([^\s]*)\(/)
  let approvedMatch = true
  if (funcMatch && !allowedFuncts.includes(funcMatch[1])) {
    approvedMatch = false
  }
  return node.variable && approvedMatch
}

function collectVariables() {
  return {
    postcssPlugin: 'prepare-contents',
    prepare(result) {
      const variables = {}
      return {
        AtRule(atRule) {
          atRule.remove()
        },
        Comment(comment) {
          comment.remove()
        },
        Declaration(node) {
          if (checkNode(node)) {
            node.value = node.value.replace(' !default', '')
            const fileName = node.source.input.file.replace(`${process.cwd()}/`, '')
            variables[node.prop] = {
              // computed: value,
              values: [node.value],
              source: {
                path: fileName,
                line: node.source.start.line
              }
            }
          } else {
            node.remove()
          }
        },
        OnceExit() {
          result.variables = variables
        }
      }
    }
  }
}

export default analyzeVariables

;(async () => {
  const args = process.argv.slice(2)
  const file = args.length ? args.shift() : 'src/support/index.scss'
  const variables = await analyzeVariables(file)
  JSON.stringify(variables, null, 2)
})()
