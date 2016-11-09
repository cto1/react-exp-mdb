const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaders = [
  {
    test: /(\.js|\.jsx?$)/,
    loader: 'babel',
    exclude: /node_modules/,
  },
  {
    test: /\.css?$/,
    loader: 'style!css',
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
      'postcss',
      'sass'
    ),
  },
];

const plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false,
    sourceMap: false,
    mangle: true,
    minimize: true,
  }),
];

module.exports = {
  loaders: loaders,
  plugins: plugins,
};
