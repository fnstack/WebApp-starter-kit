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
    new HtmlWebpackPlugin({ template: 'src/index.html', favicon: 'src/favicon.ico' }),

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
    contentBase: '/',
    port,
    hot: true,
    open: true,
    before(app) {
      app.use(function(req, res, next) {
        if (path.extname(req.path).length > 0) {
          next();
        } else {
          req.url = '/index.html';
          next();
        }
      });
      app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/src/index.html'));
      });
    }
  }
});
