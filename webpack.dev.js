const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const port = 3000;

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: '[name].js',
    pathinfo: true
  },

  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      chunks: ['app'],
      filename: 'index.html'
    }),
    // new HtmlWebpackPlugin({
    //   template: 'src/identity/silentRenew/silent_renew.html',
    //   chunks: ['silentRenew'],
    //   filename: 'silent_renew.html'
    // }),

    new ForkTsCheckerWebpackPlugin(),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1
            }
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: { javascriptEnabled: true }
          }
        ]
      }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, '/'),
    port,
    hot: true,
    open: true,
    before(app) {
      app.use(function(req, res, next) {
        if (path.extname(req.path).length > 0) {
          next();
        }
        // else if (path.dirname(req.path).indexOf('silent_renew') > -1) {
        //   req.url = '/silent_renew.html';
        //   next();
        // }
        else {
          req.url = '/index.html';
          next();
        }
      });
    }
  }
});
