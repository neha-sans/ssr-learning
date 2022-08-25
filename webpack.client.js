const path = require('path');
module.exports = {

  // root file for client application
  entry: './src/client/index.js',
  // where to put out file when generated

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // tell webpack to run babel on each file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react', // take jsx and transpile to js
            'stage-0', // async code handles
            ['env',
              { targets: { browsers: ['last 2 versions'] }, }]
            // env is master preset which says : run all the transform rules 
            //needed to run on the browser with last 2  versions for browsers
          ]
        }
      }
    ]
  }
}