const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    }),
  ]
};
