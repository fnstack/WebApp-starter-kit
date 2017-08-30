import path from 'path';
var webpack = require('webpack');
import HtmlWebpackPlugin from 'html-webpack-plugin';
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var stylelint = require('stylelint');
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

export default {
  devtool : 'inline-source-map',
  //noInfo: false,

  resolve : {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx'
    ],
    modules: [
      path.resolve(__dirname),
      'node_modules',
      'src'
    ]
  },

  entry : {
    app: ['./src/index.tsx']
  },
  target : 'web',
  output : {
    path: path.resolve(__dirname, 'src'),
    //path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    pathinfo: true
  },
  plugins : [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({template: 'src/index.html', inject: true}),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CheckerPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [
            stylelint({
              files: path.resolve(__dirname, 'src/**/*.css')
            }),
            postcssNext(),
            postcssAssets({relative: true})
          ];
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new SimpleProgressPlugin()
  ],

  module : {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?name=fonts/.[ext]'
      }, {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/.[ext]'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/.[ext]'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/.[ext]'
      }, {
        test: /\.(jpe?g|png|gif|ico)$/i,
        include: path.resolve('./src'),
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&name=images/[hash].[ext]'
      }
    ]
  }
}
