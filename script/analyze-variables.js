#!/usr/bin/env node
const postcss = require('postcss')
const {join} = require('path')
const fs = require('fs')
const atImport = require('postcss-import')
const syntax = require('postcss-scss')

const processor = postcss([
  atImport({path: ['src']}),
  collectVariables(),
  require('postcss-simple-vars')({includePaths: [join(__dirname, '../src/support/variables')]})
])

async function analyzeVariables(fileName) {
  const contents = await fs.readFileSync(fileName, 'utf8')

  const result = await processor.process(contents, {from: fileName, map: false, syntax})
  for (const message of result.messages) {
    if (message.plugin === 'postcss-simple-vars' && message.type === 'variable') {
      if (!result.variables[`$${message.name}`].values.includes(message.value)) {
        result.variables[`$${message.name}`].values.push(message.value)
      }
      const computed = message.value
      result.variables[`$${message.name}`].computed = computed
    }
  }
  return result.variables
}

function checkNode(node) {
  const allowedFuncts = ['var', 'round', 'cubic-bezier']
  const functMatch = node.value.match(/([^\s]*)\(/)
  let approvedMatch = true
  if (functMatch && !allowedFuncts.includes(functMatch[1])) {
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

if (module.parent) {
  module.exports = analyzeVariables
} else {
  ;(async () => {
    const args = process.argv.slice(2)
    const file = args.length ? args.shift() : 'src/support/index.scss'
    const variables = await analyzeVariables(file)
    console.log(JSON.stringify(variables, null, 2))
  })()
}
