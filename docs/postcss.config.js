// This config file is necessary to get postcss-loader to work in
// ./src/@primer/gatsby-theme-doctocat/components/live-preview-wrapper.js.
const path = require('path')

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-node-sass')({
      includePaths: [path.join(__dirname, 'node_modules')],
      outputStyle: 'compressed'
    }),
    require('autoprefixer')
  ]
}
