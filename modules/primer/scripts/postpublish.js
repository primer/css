const fs = require('fs')
const {join} = require('path')

const version = require('../package.json').version
const path = join(__dirname, '../../../VERSION')
fs.writeFileSync(path, version, 'utf8')
