/* eslint-disable no-console */
const sync = require('./sync')
const {CI, NODE_ENV, NOW_URL} = process.env

const PRIMER_SCSS = 'primer/index.scss$'
const PRIMER_STATIC_CSS = require.resolve('primer/build/build.css')

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

      const {dev} = options

      // only attempt to sync locally and in CI
      if (dev && !configured) {
        sync({watch: !CI})
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: '@svgr/webpack'
      })

      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'mdx-loader',
            options: {
              // nix rehype-prism, which does syntax highlighting *before* we
              // can attach live editors
              hastPlugins: []
            }
          }
        ]
      })

      /**
       * in production we don't have access to ../modules, so we need to
       * rewrite the 'primer/index.scss' import to the static CSS build
       */
      if (!dev) {
        config.resolve.alias[PRIMER_SCSS] = PRIMER_STATIC_CSS
        // only log the aliasing once
        if (!configured) {
          console.warn(`*** rewriting ${PRIMER_SCSS} to ${PRIMER_STATIC_CSS}`)
        }
      }

      configured = true
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
