const autoprefixer = require('autoprefixer')
const sass = require('@csstools/postcss-sass')
const scss = require('postcss-scss')
const scssImport = require('postcss-import')
const { join } = require('path')

module.exports = {
  map: {
    sourcesContent: false,
    annotation: true
  },
  customSyntax: scss,
  parser: scss,
  plugins: [
    scssImport,
    sass({
      includePaths: [join(__dirname, 'node_modules')],
      outputStyle: process.env.CSS_MINIFY === '0' ? 'expanded' : 'compressed'
    }),
    autoprefixer
  ]
}
