const {join, resolve} = require('path')
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')
const configure = require('./lib/config')

module.exports = configure(
  css(
    sass({
      sassLoaderOptions: {
        includePaths: [
          resolve(__dirname, '../modules')
        ]
      }
    })
  )
)
