const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        include: path.resolve(__dirname, '../modules')
      }
    ]
  }
}
