module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-node-sass': {
      includePaths: ['node_modules'],
      outputStyle: 'compressed'
    },
    autoprefixer: {}
  }
}
