const express = require("express");
const path = require("path");
const open = require("open");
const webpack = require("webpack");
const config = require("../webpack.dev");
const webpackMiddleware = require("webpack-dev-middleware-webpack-2");

/* eslint-disable no-console */

process.env.NODE_ENV = "development";

const port = 3003;
const app = express();
const compiler = webpack(config);

app.use(function(req, res, next) {
  if (path.extname(req.path).length > 0) {
    next();
  } else if (path.dirname(req.path).indexOf("silent_renew") > -1) {
    req.url = "/silent_renew.html";
    next();
  } else {
    req.url = "/index.html";
    next();
  }
});

app.use(
  webpackMiddleware(compiler, {
    //noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/silent_renew.html", function(req, res) {
  res.sendFile(
    path.join(__dirname, "../src/security/silentRenew/silent_renew.html")
  );
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
