const autoprefixer = require('autoprefixer')
const sass = require('@koddsson/postcss-sass')
const scss = require('postcss-scss')
const scssImport = require('postcss-import')
const { join } = require('path')
const importedJSONFromPrimitives = require('./node_modules/@primer/primitives/tokens-next-private/fallbacks/color-fallbacks.json')

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
    autoprefixer,
    require('postcss-custom-properties-fallback')({
      importFrom: {
        customProperties: importedJSONFromPrimitives
      },
    }),
  ]
}
