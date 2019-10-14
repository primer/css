#!/usr/bin/env node
const stylelint = require('stylelint')
const {red} = require('colorette')

const ruleName = 'primer-css/TODO'
const cwd = process.cwd()

stylelint
  .lint({files: 'src/**/*.scss'})
  .then(data => {
    let fail = false
    for (const {source, warnings} of data.results) {
      if (warnings.some(w => w.rule === ruleName)) {
        console.warn('\n' + source.substr(cwd.length + 1))
      }
      for (const warning of warnings) {
        if (warning.rule === ruleName) {
          console.warn(`${red('✖')} ${warning.text}`)
          fail = true
        }
      }
    }

    process.exit(fail ? 1 : 0)
  })
