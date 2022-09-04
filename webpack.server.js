const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const babelConfig = require('./webpack.base');
const serverConfig = {
  // inform webpack tge we are building bundle for nodejs 
  // and not for browser
  target: 'node',
  // root file for server application
  entry: './src/index.js',
  // where to put out file when generated

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
 externals: [webpackNodeExternals()]


}
  // tell webpack to run babel on each file

module.exports = merge( babelConfig, serverConfig)