const {writeFileSync} = require('fs')
const {join, resolve} = require('path')

const root = resolve(__dirname, '../../..')
const version = require('../package.json').version

const path = join(root, 'primer-version.txt')
writeFileSync(path, version, 'utf8')
