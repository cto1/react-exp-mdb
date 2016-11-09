const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

const resolve = path.resolve;

const NODE_ENV = process.env.NODE_ENV;

const config = {
  target: 'node',
  context: resolve('./'),
  entry: './server.js',
  output: {
    path: resolve('dist'),
    filename: 'server.bundle.js',
    sourceMapFilename: 'server.bundle.js.map',
  },
  module: {
    loaders: common.loaders,
  },
  externals: [nodeExternals()],
  plugins: [
    new InlineEnviromentVariablesPlugin(['NODE_ENV', 'SERVER_PORT', 'API_PORT']),
    new ExtractTextPlugin('styles.server.css'),
  ],
};

if (NODE_ENV === 'production') {
  module.exports = merge.smart(config, {
    devtool: 'source-map',
    plugins: common.plugins,
  });
}
