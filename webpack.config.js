const path = require('path');
const webpack = require('webpack');
const CarteBlanche = require('carte-blanche');
const ReactPlugin = require('carte-blanche-react-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// PostCSS plugins
const postCSSImport = require('postcss-import');
const postCSSNext = require('postcss-cssnext');
const postCSSRucksack = require('rucksack-css');
const postCSSReporter = require('postcss-reporter');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  debug: true,
  entry: ['webpack-dev-server/client?http://localhost:3000/', 'webpack/hot/only-dev-server', path.resolve(ROOT_PATH, 'src')],
  output: {
    publicPath: '/',
    path: path.resolve(ROOT_PATH, 'build.dev'),
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css?modules&camelCase&importLoaders=1', 'postcss'],
      }, {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: (webpack) => {
    return [
      postCSSImport({
        addDependencyTo: webpack,
      }),
      postCSSNext(),
      postCSSRucksack(),
      postCSSReporter(),
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(ROOT_PATH, 'src/index.html'),
    }),
    new CarteBlanche({
      componentRoot: 'src/components',
      plugins: [
        new ReactPlugin(),
      ]
    })
  ],
};
