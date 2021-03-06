const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = path.resolve;

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
        loaders: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
    ]),
  ],
  devServer: {
    port: 3000,
    contentBase: resolve('dist'),
    historyApiFallback: true,
    recordsPath: resolve('dist'),
  },
};
