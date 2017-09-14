const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const glob = require('glob');

module.exports = {
  entry: glob.sync('./src/**/?(*.js|*.jsx)').reduce((result, item) => (
    Object.assign({}, result, {
      [item.replace(/\.[^/.]+$/, '').replace('./src/', './')]: item,
    })
  ), {}),
  output: {
    filename: '[name].js',
    path: path.resolve('./lib'),
    library: 'quark',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    React: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_',
    },
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|lib|example)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|lib|example)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'less-loader',
            'postcss-loader',
          ],
        }),
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /(node_modules|lib|example)/,
        use: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|lib|example)/,
        use: 'babel-loader',
      },
      {
        test: /\.svg/,
        exclude: /(node_modules|lib|example)/,
        use: 'url-loader',
      },
    ],
  },
};
