const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge( common, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
} )
