module.exports = {
  parser: 'postcss-scss',
  plugins: {
    '@csstools/postcss-sass': {
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
