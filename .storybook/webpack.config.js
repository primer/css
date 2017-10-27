const path = require("path");

const modulesPath = path.resolve(__dirname, "../modules")

module.exports = (config, env) => {

  if (env === 'PRODUCTION') {
    config.plugins = config.plugins
      .filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  config.module.rules.push(
    {
      test: /\.md$/,
      use: "raw-loader",
    },
    {
      test: /\.scss$/,
      loaders: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            config: {
              path: require.resolve("./postcss.config.js"),
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            includePaths: [
              modulesPath,
            ],
          }
        },
      ],
      include: modulesPath,
    }
  )

  return config
}
