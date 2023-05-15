const shared = {
  __DEV__: "process.env.NODE_ENV !== 'production'",
}

module.exports = {
  development: shared,
  test: shared,
  production: {
    ...shared,
    __DEV__: 'false',
    'process.env.NODE_ENV': "'production'",
  },
}
