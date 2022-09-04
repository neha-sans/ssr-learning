const path = require('path');
const merge = require('webpack-merge');
const babelConfig = require('./webpack.base');
const clientConfig = {

  // root file for client application
  entry: './src/client/index.js',
  // where to put out file when generated

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
}
  // tell webpack to run babel on each file
module.exports = merge(babelConfig, clientConfig)