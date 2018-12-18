const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  optimization: {
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),

    //Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
      // chunks: ['index', 'app', 'vendors~app'],
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   useShortDoctype: true,
      //   removeEmptyAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   keepClosingSlash: true,
      //   minifyCSS: true,
      //   minifyURLs: true
      // },
      // inject: true,
      // // Properties you define here are available in index.html using
      // // htmlWebpackPlugin.options.varName
      // trackJSToken: '43ad216f57d94259968435894490a5c7'
    }),
    new ForkTsCheckerWebpackPlugin()
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
              happyPackMode: true,
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         minimize: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     },
      //     {
      //       loader: 'sass-loader'
      //     }
      //   ]
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: 'style-loader' // creates style nodes from JS strings
      //     },
      //     {
      //       loader: 'css-loader', // translates CSS into CommonJS
      //       options: {
      //         sourceMap: true
      //       }
      //     },
      //     {
      //       loader: 'less-loader', // compiles Less to CSS
      //       options: { javascriptEnabled: true }
      //     }
      //   ]
      // }
    ]
  }
});
