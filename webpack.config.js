var config = {
  entry: './index.js',

  output: {
    path     : './',
    filename : 'index.js'
  },

  devServer: {
    inline             : true,
    port               : 8080,
    historyApiFallback : true
  },

  module: {
    loaders: [
      {
        test   : /\.less/,
        loader : 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test    : /\.jsx?$/,
        loader  : 'babel',
        exclude : /node_modules/,
        query   : {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}

module.exports = config
