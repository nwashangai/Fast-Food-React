const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react', 'stage-0']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader?name=/assets/images/[name].[ext]',
        }
      },
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html'
    }),
    new Dotenv()
  ],
  devServer: {
    historyApiFallback: true
  }
};
