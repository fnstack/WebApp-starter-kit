const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  context: process.cwd(),
  output: {
    path: path.join(process.cwd(), 'dist'),
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
      favicon: 'src/favicon.ico',
      chunks: ['app', 'vendors~app'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    // new HtmlWebpackPlugin({
    //   template: 'src/identity/silentRenew/silent_renew.html',
    //   chunks: ['silentRenew'],
    //   filename: 'silent_renew.html'
    // }),

    //SetNODE_ENV variable to production.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      useTypescriptIncrementalApi: true,
      memoryLimit: 4096
    })
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
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
    ]
  }
});
