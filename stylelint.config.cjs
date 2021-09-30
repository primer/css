module.exports = {
  extends: ['@primer/stylelint-config'],
  plugins: ['stylelint-scss'],
  syntax: 'scss',
  ignoreFiles: ['src/fonts/**/*'],
  rules: {
    'scss/dollar-variable-default': [true, {ignore: 'local'}],
    'primer/no-override': false,
    'primer/colors': true,
    'primer/borders': true,
    'primer/spacing': true,
    'primer/typography': true,
    'primer/box-shadow': true,
    'primer/no-undefined-vars': [true, {files: 'node_modules/@primer/primitives/dist/scss/colors*/*.scss'}]
  }
}
