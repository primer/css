const sassPluginName = process.env.SASS_PLUGIN_NAME || '@csstools/postcss-sass'

module.exports = {
  parser: 'postcss-scss',
  plugins: {
    [sassPluginName]: {
      includePaths: ['node_modules'],
      outputStyle: 'compressed'
    },
    'autoprefixer': {}
  },
  map: {
    sourcesContent: true,
    annotation: true
  }
}
