#!/usr/bin/env node
'use strict'
/* eslint-disable no-console */
const meow = require('meow')
const build = require('./')

const cli = meow(`
  Usage
    $ primer-module-build [file]

  File
    File. This is required. The file input is the .scss file that
    will be built into .css. The build automatically looks in the
    node_modules/ directory for any inputs.

  Example
    $ primer-module-build index.scss
`)

build(cli)
  .then(files => {
    console.warn('YES! wrote %d files:', files.length)
    for (const file of files) console.warn(file)
    process.exit(0)
  })
  .catch(err => {
    console.error('NO:', err)
    process.exit(1)
  })
