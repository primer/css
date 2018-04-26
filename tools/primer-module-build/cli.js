#!/usr/bin/env node
'use strict'
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
