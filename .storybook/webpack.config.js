const {resolve} = require('path')
const sourcePath = resolve(__dirname, '../src')

module.exports = ({config}) => {
  const babel = config.module.rules.find(rule => {
    return rule.test.test('test.js')
  }).use[0]

  config.module.rules = config.module.rules.filter(rule => {
    return !rule.test.test('test.md')
  })

  config.module.rules.push(
    {
      test: /\.md$/,
      include: sourcePath,
      loaders: [
        babel,
        {
          loader: require.resolve('./story-loader'),
          options: {
            sourcePath
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      include: sourcePath,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: require.resolve('../postcss.config.js')
            }
          }
        }
      ]
    }
  )

  return config
}
