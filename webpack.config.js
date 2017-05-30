const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const DEV_PORT = 8080;
const resolve = p => path.resolve(ROOT_PATH, p);

module.exports = env => ({
  context: path.resolve(ROOT_PATH, 'src'),

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
    'webpack/hot/only-dev-server',
    './index.js',
  ],

  devtool: 'eval',

  output: {
    filename: 'bundle.js',
    path: resolve('build.dev'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: false,
              camelCase: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.svg$/,
        use: 'svg-url-loader',
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
      },
    ],
  },

  resolve: {
    modules: [resolve('src'), resolve('node_modules')],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HTMLWebpackPlugin({
      inject: true,
      template: resolve('src/index.html'),
      showErrors: false,
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],

  devServer: {
    stats: 'minimal',
    hot: true,
    contentBase: resolve('build.dev'),
    publicPath: '/',
    port: DEV_PORT,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
  },
});
