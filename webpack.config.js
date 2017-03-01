const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  context: path.resolve(ROOT_PATH, 'src'),
  entry: ['./index.js'],
  devtool: 'eval',

  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, 'build.dev'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'react-hot-loader' },
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

  plugins: [
    new HTMLWebpackPlugin({
      inject: false,
      template: path.resolve(ROOT_PATH, 'src/index.html'),
      showErrors: true,
    }),
  ],

  devServer: {
    stats: 'minimal',
  },
};
