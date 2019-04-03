const {join, resolve} = require('path')
const withSass = require('@zeit/next-sass')
const configure = require('@primer/blueprints/lib/config')

module.exports = configure(
  withSass({
    sassLoaderOptions: {
      includePaths: [
        resolve(__dirname, '../modules'),
        resolve(__dirname, 'node_modules')
      ]
    }
  })
)
