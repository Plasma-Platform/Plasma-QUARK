var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER  : JSON.stringify(true),
        NODE_ENV : JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new ExtractTextPlugin('main.css')
  ],

  output: {
    path          : __dirname + '/css/',
    libraryTarget : 'commonjs',
    filename      : 'main.js'
  },
  target    : 'node',
  externals : {
    react: 'React'
  },
  module: {
    loaders: [
      {
        test   : /\.css$/,
        loader : ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test   : /\.less$/,
        loader : ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
      },
      { test: /\.jsx$/, loader: 'babel', exclude: [/node_modules/, /public/] },
      { test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /public/] }
    ]
  }
}
