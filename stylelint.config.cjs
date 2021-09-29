module.exports = {
  extends: ['@primer/stylelint-config'],
  plugins: ['stylelint-scss'],
  syntax: 'scss',
  ignoreFiles: ['src/fonts/**/*'],
  rules: {
    'scss/dollar-variable-default': [true, {ignore: 'local'}],
    'primer/no-override': false,
    'primer/no-undefined-vars': [true, {files: 'node_modules/@primer/primitives/dist/scss/colors*/*.scss'}]
  }
}
