module.exports = {
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