const {resolve} = require('path')
const pagesPath = resolve(__dirname, '../pages/css')

module.exports = ({config}) => {
  const babel = config.module.rules[0].use[0]

  config.module.rules = config.module.rules.filter(rule => {
    return !rule.test.test('test.md')
  })

  config.module.rules.push(
    {
      test: /\.md$/,
      include: pagesPath,
      loaders: [
        babel,
        {
          loader: require.resolve('./story-loader'),
          options: {
            sourcePath: pagesPath
          }
        }
      ]
    },
    {
      test: /\.scss$/,
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
