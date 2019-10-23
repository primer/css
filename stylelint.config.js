const currentVersion = process.env.PRIMER_VERSION || require('./package.json').version

module.exports = {
  extends: ['stylelint-config-primer'],
  plugins: ['./lib/stylelint-todo'],
  syntax: 'scss',
  rules: {
    'primer-css/TODO': [true, {currentVersion, severity: 'error'}],
    'primer/no-override': false,
    'primer/colors': true,
    'primer/spacing': true,
    'primer/typography': [
      true,
      {
        rules: ({rules}) => {
          rules['font-size'].values.unshift('$h*-size-mobile')
          return rules
        }
      }
    ],
    'primer/box-shadow': true,
    'primer/borders': true
  }
}
