const webpack = require("webpack");
const path = require("path");
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");
const outputDir = path.join(__dirname, "dist/");

module.exports = {
  devtool: "source-map",
  entry: [path.resolve(__dirname, "src/Index.tsx")],

  resolve: {
    extensions: [
      ".ts", ".tsx", ".js", ".jsx"
    ],
    modules: [
      path.resolve(__dirname),
      "node_modules",
      "src"
    ]
  },
  target: "web",
  plugins: [// Generate an external css file with a hash in the filename
    new SimpleProgressPlugin()],

  module: {
    rules: [
      {
        test: /\.eot(\?.*)?$/,
        loader: "file-loader?name=fonts/.[ext]"
      }, {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: "file-loader?name=fonts/.[ext]"
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/.[ext]"
      }, {
        test: /\.svg(\?.*)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/.[ext]"
      }, {
        test: /\.(jpe?g|png|gif|ico)$/i,
        include: path.resolve("./src"),
        exclude: /node_modules/,
        loader: "url-loader?limit=10000&name=images/[hash].[ext]"
      }
    ]
  }
};
