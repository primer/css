const {join, dirname, resolve} = require('path')
const withSass = require('@zeit/next-sass')
const configure = require('@primer/blueprints/configure')

module.exports = configure(
  withSass({
    target: 'serverless',
    env: {
      GOOGLE_ANALYTICS_UA: 'UA-126681523-1'
    },
    sassLoaderOptions: {
      includePaths: [
        resolve(__dirname, '../modules'),
        resolve(__dirname, 'node_modules')
      ]
    }
  })
)
