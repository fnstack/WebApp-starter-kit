const express =require('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
const webpackMiddleware = require("webpack-dev-middleware-webpack-2");

/* eslint-disable no-console */

process.env.NODE_ENV = 'development';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  //noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
