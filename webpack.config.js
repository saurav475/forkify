const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      axios: 'axios'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};