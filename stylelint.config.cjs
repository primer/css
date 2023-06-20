module.exports = {
  extends: ['@primer/stylelint-config'],
  ignoreFiles: ['**/*.js', '**/*.cjs'],
  rules: {
    'primer/no-override': false,
    'primer/no-deprecated-colors': [
      true,
      {
        inlineFallback: true,
      },
    ],
  },
}
