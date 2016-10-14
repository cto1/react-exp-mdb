const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = path.resolve;

const NODE_ENV = process.env.NODE_ENV;

const common = {
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
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
          // 'postcss',
          'sass'
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
    ]),
  ],
};

if (NODE_ENV === 'development') {
  module.exports = merge.smart(common, {
    devServer: {
      port: 3000,
      contentBase: resolve('dist'),
      historyApiFallback: true,
      recordsPath: resolve('dist'),
    },
    devtool: 'cheap-module-eval-source-map',
  });
}

if (NODE_ENV === 'production') {
  module.exports = merge.smart(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        comments: false,
        sourceMap: false,
        mangle: true,
        minimize: true
      }),
    ],
  });
}
