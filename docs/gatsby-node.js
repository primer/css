exports.onCreateWebpackConfig = ({actions, stage, plugins}) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    },
    plugins: [
      plugins.define({
        __DEV__: stage === 'develop' || stage === 'develop-html'
      })
    ]
  })
}
