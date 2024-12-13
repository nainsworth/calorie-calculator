const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = {
  mode: "development",

  devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
