const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = env => ({
  context: path.resolve(ROOT_PATH, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  devtool: 'inline-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, 'build.dev'),
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
    ],
  },

  resolve: {
    alias: {
      Components: path.resolve(ROOT_PATH, 'src/components/'),
      Enhancers: path.resolve(ROOT_PATH, 'src/enhancers/'),
      Layout: path.resolve(ROOT_PATH, 'src/layout/'),
      Styles: path.resolve(ROOT_PATH, 'src/styles/'),
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      inject: false,
      template: path.resolve(ROOT_PATH, 'src/index.html'),
      showErrors: true,
    }),
  ],

  devServer: {
    stats: 'minimal',
    hot: true,
    contentBase: path.resolve(ROOT_PATH, 'build.dev'),
    publicPath: '/',
  },
});
