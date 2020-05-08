// This config file is necessary to get postcss-loader to work in
// ./src/@primer/gatsby-theme-doctocat/components/live-preview-wrapper.js.
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
