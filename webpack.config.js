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
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&'
        + 'includePaths[]=' + (path.resolve(__dirname, './bower_components'))
        + '&'
        + 'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "file-loader"
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
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
