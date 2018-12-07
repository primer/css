/* eslint-disable no-console */

module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const test = pluginOptions.extension || /\.mdx?$/
  const primerSCSS = 'primer/index.scss$'
  const primerCSS = require.resolve('primer/build/build.css')

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
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
      if (!options.dev && !config.resolve[primerSCSS]) {
        console.warn('*** rewriting primer/index.scss to:', primerCSS)
        config.resolve.alias[primerSCSS] = primerCSS
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
