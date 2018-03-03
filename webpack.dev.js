const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const port = 3003;

module.exports = merge(common, {
  devtool: "source-map",

  entry: ["./src/index.tsx"],

  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
    pathinfo: true
  },

  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({template: "src/index.html", inject: true}),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"'
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      }, {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "fast-sass-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "/",
    compress: true,
    port,
    hot: true,
    open: true,

    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: '/index.html'
        }, {
          from: /^\/silent_renew.html/,
          to: 'src/security/silentRenew/silent_renew.html'
        }
      ]
    }
  }
});
