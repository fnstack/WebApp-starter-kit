const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require ('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
  devtool : 'source-map',
  entry : {
    app: ['./src/index.tsx'],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'axios',
      'classnames',
      'es6-promise',
      'material-ui',
      'react-helmet',
      'react-intl',
      'react-redux',
      'react-router-redux',
      'react-tap-event-plugin',
      'redux',
      'redux-connect',
      'redux-form',
      'redux-form-material-ui',
      'redux-persist',
      'redux-saga'
    ]
  },
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
  target : 'web',
  output : {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.[hash].js'
  },
  plugins : [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[hash].css'),

    //use webpack 3 scope hoisting to reduce bundle's size
    new webpack
      .optimize
      .ModuleConcatenationPlugin(),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Use CommonsChunkPlugin to create a separate bundle of vendor libraries so
    // that they're cached separately.
     new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),

    //Create HTML file that includes
    // reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Properties you define here are available in index.html using
      // htmlWebpackPlugin.options.varName
      trackJSToken: '43ad216f57d94259968435894490a5c7'
    }),

    // Minify JS
    new webpack
      .optimize
      .UglifyJsPlugin(),

    //SetNODE_ENV variable to production.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    //Add progression bar
    new SimpleProgressPlugin()
  ],
  module : {
    loaders: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      }, {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
       }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            }
          ],
          fallback: "style-loader"
        })
      },  {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: true
            }
          }, {
            loader: "fast-sass-loader"
          }],
          fallback: "style-loader"
        })
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]'
      }, {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?limit=1000&mimetype=application/octet-stream&name=styles/fonts/[name]' +
            '.[hash].[ext]'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=1000&mimetype=image/svg+xml&name=fonts/[hash].[hash].[ext]'
      }, {
        test: /\.(jpe?g|png|gif)(\?.*)?$/i,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000&name=images/[name].[hash].[ext]'
      }, {
        test: /\.ico(\?.*)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000&mimetype=image/x-icon&name=./[name].[hash].[ext]'
      }
    ]
  }
};
