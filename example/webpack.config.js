module.exports = {
  entry  : './main.js',
  output : {
    path     : './',
    filename : 'index.js'
  },
  devServer: {
    inline : true,
    host   : '0.0.0.0',
    port   : 4444
  },
  module: {
    loaders: [
      {
        test    : /\.(js|jsx)$/,  // All .js files
        loaders : ['babel'],
        exclude : /node_modules/
      },
      {
        test   : /\.css$/,
        loader : 'style-loader!css-loader'
      },
      {
        test   : /\.png/,
        loader : 'file-loader'
      },
      {
        test   : /\.styl/,
        loader : 'style-loader!css-loader!stylus-loader'
      },
      {
        test   : /\.less$/,
        loader : 'style!css!less!postcss?parser=postcss-safe-parser'
      },
      {
        test   : /\.svg$/,
        loader : 'svg'
      }
    ]
  },
  postcss: function () {
    return [
      require('postcss-inline-svg'),
      require('autoprefixer')
    ];
  }
}