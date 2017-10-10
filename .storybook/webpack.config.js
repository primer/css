const path = require("path");

const modulesPath = path.resolve(__dirname, "../modules")

module.exports = {
  module: {
    rules: [
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
      },
    ],
  },
}
