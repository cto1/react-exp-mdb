const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = path.resolve;

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: 'web',
  context: resolve('src'),
  entry: './index.jsx',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        loader: 'style!css',
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
      { from: 'index.css', to: 'index.css' },
    ]),
  ],
  devServer: {
    port: 3000,
    contentBase: resolve('dist'),
    historyApiFallback: true,
    recordsPath: resolve('dist'),
  },
};
