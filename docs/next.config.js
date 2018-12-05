// this runs synchronously
// require('./copy')

const {join, resolve} = require('path')
const withPlugins = require('next-compose-plugins')
const configure = require('./lib/config')
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')

const {NODE_ENV, NOW_URL} = process.env
const assetPrefix = NOW_URL || ''

module.exports = withPlugins([
  css(sass({
    sassLoaderOptions: {
      includePaths: [
        resolve(__dirname, '../modules')
      ]
    }
  })),
  configure()
], {
  /*
   * Note: Prefixing assets with the fully qualified deployment URL
   * makes them available even when the site is served from a path alias, as in
   * <https://primer.style/css>
   */
  assetPrefix,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  publicRuntimeConfig: {
    assetPrefix,
    production: NODE_ENV === 'production'
  }
})
