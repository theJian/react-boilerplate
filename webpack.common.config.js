const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: [
    path.resolve(__dirname, 'src')
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
