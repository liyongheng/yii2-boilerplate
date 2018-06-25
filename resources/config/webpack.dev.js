const merge = require('webpack-merge')

const base = require('./webpack.base.js')

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  resolve: {},
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    contentBase: false,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    publicPath: 'http://127.0.0.1:8080/build/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: []
})
