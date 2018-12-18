const path = require('path');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'src/index.tsx')]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    modules: [path.resolve(__dirname), 'node_modules', 'src']
  },
  target: 'web',
  plugins: [
    // Generate an external css file with a hash in the filename
    new SimpleProgressPlugin()
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
        loader: 'url-loader?limit=1000&mimetype=application/octet-stream&name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=1000&mimetype=image/svg+xml&name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        include: path.resolve('./src'),
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000&name=images/[name].[hash].[ext]'
      },
      {
        test: /\.ico$/i,
        include: path.resolve('./src'),
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  }
};
