const path = require('path');
const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
const common = require('./webpack.config.common');

const resolve = path.resolve;

const NODE_ENV = process.env.NODE_ENV;

const config = {
  target: 'web',
  context: resolve('src'),
  entry: ['./index.jsx'],
  output: {
    path: resolve('dist'),
    filename: 'client.bundle.js',
    sourceMapFilename: 'client.bundle.js.map',
  },
  module: {
    loaders: common.loaders,
  },
  plugins: [
    new InlineEnviromentVariablesPlugin(['NODE_ENV']),
    new ExtractTextPlugin('styles.css'),
  ],
};

if (NODE_ENV === 'development') {
  module.exports = merge.smart(config, {
    devtool: 'source-map',
    plugins: [
      new CopyWebpackPlugin([
        { from: 'index.html', to: 'index.html' },
      ]),
      // new HtmlWebpackPlugin(),
    ],
  });
}

if (NODE_ENV === 'production') {
  module.exports = merge.smart(config, {
    devtool: 'source-map',
    plugins: common.plugins,
  });
}
