#!/usr/bin/env node
const postcss = require('postcss')
const atImport = require('postcss-import')
const syntax = require('postcss-scss')
const valueParser = require('postcss-value-parser')
const {readFile} = require('fs-extra')

if (module.parent) {
  module.exports = analyzeVariables
} else {
  const args = process.argv.slice(2)
  const file = args.length ? args.shift() : 'src/support/index.scss'
  analyzeVariables(file).then(data => console.log(JSON.stringify(data, null, 2)))
}

function analyzeVariables(file) {
  const variables = {}

  const processor = postcss([
    atImport({path: 'src'}),
    variablePlugin(variables),
    require('postcss-node-sass')({includePaths: ['src/support/variables']})
  ])

  return readFile(file, 'utf8')
    .then(css => processor.process(css, {from: file, map: false, syntax}))
    .then(({root}) => {
      root.walkRules(':root', container => {
        container.walkDecls(decl => {
          const {prop, value} = decl
          const actualProp = `$${prop.replace(/^--/, '')}`
          const entry = variables[actualProp]
          if (last(entry.values) !== value) {
            entry.values.push(value)
          }
          if (value.match(/^var\(--.*\)/)) {
            delete variables[actualProp]
          } else {
            variables[actualProp] = Object.assign(
              {
                computed: value
              },
              entry,
              {refs: []}
            )
          }
        })
      })

      for (const [prop, entry] of Object.entries(variables)) {
        for (const value of entry.values) {
          if (variables[value]) {
            variables[value].refs.push(prop)
          }
        }
      }

      // sort it alphabetically by key
      return sortObject(variables, ([ak], [bk]) => ak.localeCompare(bk))
    })
}

function variablePlugin(variables) {
  return postcss.plugin('analyze-variables', (options = {}) => {
    const {cwd = process.cwd()} = options
    return root => {
      const decls = new Map()

      root.walkDecls(/^\$/, decl => {
        const {prop, value} = decl
        if (decl.parent === root && !value.startsWith('(')) {
          decl.value = value.replace(/ *!default$/, '')
          decls.set(prop, decl)
        }
      })

      for (const [prop, decl] of decls.entries()) {
        const {nodes} = valueParser(decl.value)
        const values = [valueParser.stringify(nodes)]
        while (nodes.some(node => decls.has(node.value))) {
          for (const node of nodes) {
            const {value} = node
            if (decls.has(value)) {
              node.value = decls.get(value).value
            }
          }
          values.push(valueParser.stringify(nodes))
        }

        const {source} = decl
        variables[prop] = {
          values,
          source: {
            path: source.input.file.replace(`${cwd}/`, ''),
            line: source.start.line
          }
        }
      }

      const container = postcss.rule({selector: ':root'})
      for (const [prop, decl] of decls.entries()) {
        container.append(
          postcss.decl({
            prop: `--${prop.substr(1)}`,
            value: `#{${decl.value}}`
          })
        )
      }
      root.append(container)
    }
  })
}

function sortObject(obj, cmp) {
  const out = {}
  for (const [key, value] of Object.entries(obj).sort(cmp)) {
    out[key] = value
  }
  return out
}

function last(list) {
  return list[list.length - 1]
}
