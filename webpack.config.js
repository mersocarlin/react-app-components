/* jshint node: true */
var path = require('path');
var webpack = require('webpack');


module.exports = {
  context: path.join(__dirname),
  entry: './src/index.js',

  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
    library: 'react-app-components',
    libraryTarget: 'umd'
  },

  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'React',
      'root': 'React'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
