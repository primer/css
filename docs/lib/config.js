/* eslint-disable no-console */
const sync = require('./sync')
const {CI, NODE_ENV} = process.env

const PRIMER_SCSS = 'primer/index.scss$'
const PRIMER_STATIC_CSS = require.resolve('primer/build/build.css')

module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const test = pluginOptions.extension || /\.mdx?$/

  let configured = false

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const {dev} = options

      if (dev && !configured) {
        sync({watch: !CI})
      } else {
        sync().then(files => console.warn(`synced ${files.length} docs`))
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: '@svgr/webpack'
      })

      config.module.rules.push({
        test,
        use: [options.defaultLoaders.babel, 'mdx-loader']
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
