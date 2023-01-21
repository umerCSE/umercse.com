const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: 'auto',
    filename: 'App.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    }
}
});