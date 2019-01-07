const execa = require('execa')
const {writeFileSync} = require('fs')
const {join} = require('path')

const version = require('../package.json').version
const path = join(__dirname, '../../../primer-version.txt')
writeFileSync(path, version, 'utf8')

execa.sync('../../script/notify', ['success'], {stdio: 'inherit'})
