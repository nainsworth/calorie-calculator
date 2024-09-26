// npm init -y
// npm i -D webpack webpack-cli
// npm i -D sass style-loader css-loader sass-loader
// npm i -D html-webpack-plugin
// npm i -D babel-loader @babel/core @babel/preset-env
// npm i -D html-loader

// combined
// npm i -D webpack webpack-cli sass style-loader css-loader sass-loader html-webpack-plugin babel-loader @babel/core @babel/preset-env html-loader

// optional
// npm i axios

// for email
// npm i -D @emailjs/browser

// For posting live to git hub
// Step 1
// Remove the dist directory from the project’s .gitignore file.

// Step 2
// git add dist && git commit -m "Initial dist subtree commit"

// Step 3
// git subtree push --prefix dist origin gh-pages

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// npm i -D webpack-bundle-analyzer
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
    goals: "./src/js/goals.js",
    calories: "./src/js/calories.js",
    results: "./src/js/results.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].bundle.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist/"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    // new BundleAnalyzerPlugin(),
  ],
};
