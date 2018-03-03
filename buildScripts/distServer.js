const express = require("express");
const path = require("path");
const open = require("open");
const compression = require("compression");

/* eslint-disable no-console */

const port = 3003;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
