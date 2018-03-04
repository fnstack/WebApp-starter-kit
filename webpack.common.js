const webpack = require('webpack');
const path = require('path');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const outputDir = path.join(__dirname, 'dist/');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/Index.tsx')],
    silentRenew: [path.resolve(__dirname, './src/security/silentRenew/index.ts')]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'src']
  },
  target: 'web',
  plugins: [
    // Generate an external css file with a hash in the filename
    new SimpleProgressPlugin(),

    // Handle the silent renew by silent_renew.html
    new HtmlWebpackPlugin({
      template: './src/security/silentRenew/silent_renew.html',
      chunks: ['silentRenew', 'vendors~silentRenew'],
      filename: 'silent_renew.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        include: path.resolve('./src'),
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&name=images/[name].[hash].[ext]'
      },
      {
        test: /\.ico$/i,
        include: path.resolve('./src'),
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&name=images/[hash].[ext]'
      }
    ]
  }
};
