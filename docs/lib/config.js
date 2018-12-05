module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const test = pluginOptions.extension || /\.mdx?$/

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: {loader: '@svgr/webpack'}
      })

      config.module.rules.push({
        test,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'mdx-loader',
          }
        ]
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
