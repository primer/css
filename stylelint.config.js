const currentVersion = process.env.PRIMER_VERSION || require('./package.json').version

module.exports = {
  extends: ['stylelint-config-primer'],
  plugins: ['stylelint-scss', './lib/stylelint-todo'],
  syntax: 'scss',
  rules: {
    'scss/dollar-variable-default': [true, {ignore: 'local'}],
    'primer/no-override': false,
    'primer/colors': true,
    'primer/borders': true,
    'primer/spacing': true,
    'primer/typography': true,
    'primer/box-shadow': true,
    'primer-css/TODO': [true, {currentVersion, severity: 'error'}]
  }
}
