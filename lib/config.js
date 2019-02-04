/* eslint-disable no-console */
const sync = require('./sync')
const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const {CI, NODE_ENV, NOW_URL} = process.env

module.exports = (nextConfig = {}) => {
  const {assetPrefix = NOW_URL || ''} = nextConfig

  let configured = false

  return Object.assign({}, nextConfig, {
    assetPrefix,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],

    publicRuntimeConfig: Object.assign({
      assetPrefix,
      production: NODE_ENV === 'production'
    }, nextConfig.publicRuntimeConfig),

    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const {dev, isServer} = options

      // only attempt to sync locally and in CI
      if (dev && !configured) {
        sync({watch: !CI})
      }

      // in production, we don't need to compile Primer from SCSS; just inline
      // the CSS build!
      if (!dev) {
        config.resolve.alias['primer/index.scss$'] = require.resolve('primer/build/build.css')

        const cssLoader = cssLoaderConfig(config, {
          dev,
          isServer
        })
        options.defaultLoaders.css = cssLoader
        config.module.rules.push({
          test: /\.css$/,
          loader: cssLoader
        })
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: '@svgr/webpack'
      })

      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          options.defaultLoaders.babel,
          require.resolve('./mdx-loader')
        ]
      })

      configured = true
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
