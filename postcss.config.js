const path = require('path')

module.exports = {
  parser: 'postcss-scss',
  map: {
    sourcesContent: true,
    annotation: true
  },
  plugins: {
    'postcss-node-sass': {
      includePaths: [path.join(__dirname, 'node_modules')],
      outputStyle: 'compressed'
    },
    'autoprefixer': {}
  }
}
