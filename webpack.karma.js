const postcssImport = require('postcss-import');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
      {
        test: /.*[^.spec].(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-istanbul',
        query: {
          cacheDirectory: true,
        }
      },{
        test: /.spec.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css?modules&importLoaders=1', 'postcss'],
      }, {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  },
  postcss: (webpack) => {
    return [
      postcssImport({
        addDependencyTo: webpack,
      }),
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
