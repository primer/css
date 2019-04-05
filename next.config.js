const {join, resolve} = require('path')
const withNextPages = require('@primer/next-pages/plugin')
const withSass = require('@zeit/next-sass')
const configure = require('./lib/config')

module.exports = configure(
  withNextPages(
    withSass({
      sassLoaderOptions: {
        includePaths: [
          resolve(__dirname, '../modules'),
          resolve(__dirname, 'node_modules')
        ]
      }
    })

  )
)
