var path = require('path')

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, 'example'),
  entry: [
    './index.js'
  ],
  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, '/assets'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
