import { resolve } from 'path';
import express from 'express';

const NODE_ENV = process.env.NODE_ENV;
const SERVER_PORT = process.env.SERVER_PORT || 3000;

if (NODE_ENV === 'development') {
  const WebpackDevServer = require('webpack-dev-server');
  const webpack = require('webpack');
  const config = require('./webpack.config.client.js');

  const compiler = webpack(config);

  config.entry.unshift(`webpack-dev-server/client?http://localhost:${SERVER_PORT}/`);

  const server = new WebpackDevServer(compiler, {
    contentBase: resolve('dist'),
    inline: true,
    historyApiFallback: true,
    recordsPath: resolve('dist'),
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    stats: 'normal',
  });

  server.listen(SERVER_PORT, () => {
    console.info(`Webpack development server is listening on ${SERVER_PORT}`);
  });
}

if (NODE_ENV === 'production') {
  const compression = require('compression');
  const React = require('react');
  const { renderToString } = require('react-dom/server');
  const { match, RouterContext } = require('react-router');
  const routes = require('./src/routes.jsx');
  require('./api');

  const server = express();

  server.use(express.static(resolve('dist'), { index: false }));

  server.use(compression());

  server.get('*', ({ url }, res) => {
    match({ routes: routes.default, location: url }, (error, redirect, props) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirect) {
        res.redirect(redirect.pathname + redirect.search);
      } else if (props) {
        const appHtml = renderToString(<RouterContext {...props} />);

        res.send(renderPage(appHtml));
      } else {
        res.status(404).send('Not Found');
      }
    });
  });

  function renderPage(appHtml) {
    return `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>React sever side rendering example</title>
            <link rel="stylesheet" type="text/css" href="styles.server.css">
          </head>
          <body>
            <div id="app">${appHtml}</div>

            <link rel="stylesheet" type="text/css" href="styles.css">
            <script src="client.bundle.js"></script>
          </body>
        </html>
     `;
  }

  server.listen(SERVER_PORT, () => {
    console.info(`Production server is listening on ${SERVER_PORT}`);
  });
}
