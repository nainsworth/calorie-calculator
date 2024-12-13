// Installs
// npm i -D webpack webpack-cli sass style-loader css-loader sass-loader html-webpack-plugin babel-loader @babel/core @babel/preset-env html-loader webpack-merge

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    goals: path.resolve(__dirname, "src/js/goals.js"),
    calories: path.resolve(__dirname, "src/js/calories.js"),
    results: path.resolve(__dirname, "src/js/results.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].bundle.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              api: "modern-compiler",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Calorie Calculator",
      filename: "index.html",
      template: "src/views/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "Goals",
      filename: "goals.html",
      template: "src/views/goals.html",
      chunks: ["goals"],
    }),
    new HtmlWebpackPlugin({
      title: "Calories Options",
      filename: "calories.html",
      template: "src/views/calories.html",
      chunks: ["calories"],
    }),
    new HtmlWebpackPlugin({
      title: "Results",
      filename: "results.html",
      template: "src/views/results.html",
      chunks: ["results"],
    }),
  ],
};
