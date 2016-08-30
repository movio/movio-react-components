const postCSSImport = require('postcss-import');

module.exports = function karmaConfig(config) {
  const cssOpts = [
    'css',
    '?sourceMap',
    '&-minimize',
    '&camelCase',
    '&modules',
    '&importLoaders=1',
    '&localIdentName=[name]__[local]___[hash:base64:5]',
  ].join('');

  const generateBrowserList = (isTravis) => isTravis ? ['Chrome_travis_ci'] : ['Chrome'];

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'chai',
      'sinon',
    ],


    // list of files / patterns to load in the browser
    // files: [entry],
    files: ['**/*.spec.js'],
    webpack: {
      devtool: 'cheap-module-source-map',
      module: {
        preLoaders: [
          {
            test: /.*[^.spec].(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          }, {
            test: /.spec.js$/,
            exclude: /node_modules/,
            loaders: ['babel'],
          },
        ],
        loaders: [
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: [
              'style',
              cssOpts,
              'postcss',
            ],
          }, {
            test: /\.json$/,
            loader: 'json',
          },
        ],
      },
      postcss: (webpack) => (
        [
          postCSSImport({
            addDependencyTo: webpack,
            path: ['./src/styles'],
          }),
        ]
      ),
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },

    // Don't spam console when running tests
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: preprocessors,
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // To avoid the runner restarting too early on batch changes
    autoWatchBatchDelay: 1000,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // Custom Travis Chrome launcher
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: generateBrowserList(process.env.TRAVIS),

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-coverage',
    ],

    coverageReporter: {
      type: 'html',
      dir: '../coverage/',
      subdir: 'report',
    },

  });
};
