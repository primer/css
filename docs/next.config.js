// this runs synchronously
require('./copy')

const {join, resolve} = require('path')
const withPlugins = require('next-compose-plugins')
const configure = require('./lib/config')
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')

const pageExtensions = ['js', 'jsx', 'md', 'mdx']
const assetPrefix = process.env.NOW_URL

module.exports = withPlugins([
  css(sass({
    sassLoaderOptions: {
      includePaths: [resolve(__dirname, '../modules')]
    }
  })),
  configure()
], {
  /*
   * Note: Prefixing assets with the fully qualified deployment URL
   * makes them available even when the site is served from a path alias, as in
   * <https://primer.style/components>
   */
  assetPrefix: process.env.NOW_URL,
  pageExtensions,
  publicRuntimeConfig: {
    assetPrefix
  },

  webpack(config, {dev}) {
    const {optimization} = config
    if (optimization && Array.isArray(optimization.minimizer)) {
      const terserPlugin = optimization.minimizer[0]
      /* eslint-disable camelcase, no-console */
      console.warn('*** disabling mangling in Terser plugin ***')
      terserPlugin.options.terserOptions = {
        keep_fnames: true
      }
      /* eslint-enable camelcase, no-console */
    }
    return config
  }
})
