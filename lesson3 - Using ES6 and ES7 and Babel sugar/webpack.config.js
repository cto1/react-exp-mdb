const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = path.resolve;

module.exports = {
  target: 'web',
  context: resolve('src'),
  entry: './index',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
    ]),
  ],
};
