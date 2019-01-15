const {join, resolve} = require('path')
const sass = require('@zeit/next-sass')
const configure = require('./lib/config')

module.exports = configure(
  sass({
    sassLoaderOptions: {
      includePaths: [
        resolve(__dirname, '../modules'),
        resolve(__dirname, 'node_modules')
      ]
    }
  })
)
