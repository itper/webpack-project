equire('babel-core/polyfill');
var webpack = require('webpack');

module.exports = {
  entry: {
    activity_map: './app/assets/_activity_map.js',
    admin: './app/assets/_admin.js',
    application: [
      'webpack-dev-server/client?http://localhost:8080',
      './app/assets/_application.js'
    ],
    intl_polyfill: './app/assets/_intl_polyfill.js',
    jquery_fallback: './app/assets/_jquery_fallback.js',
    partners: './app/assets/_partners.js',
    vendor: './app/assets/_vendor.js',
    specs: [
      'webpack-dev-server/client?http://localhost:8080',
      './app/assets/spec/_specs.js'
    ],
    diffux_ci: './app/assets/spec/_diffux_ci.js',
  },

  output: {
    path: __dirname + '/public/assets',
    filename: '[name].js',
    publicPath: 'http://localhost:8080/assets'
  },

  resolve: {
    modulesDirectories: [
      'app/assets',
      'vendor/assets/bower_components',
      'node_modules',
    ],
    extensions: [
      '.jsx',
      '.js',
      '',
    ],
    loaderExtensions: ['.js', ''],
    loaderPostfixes: [''],
    unsafeCache: true,
    postfixes: [''],
    alias: {
      'core-js': __dirname + '/node_modules/babel-runtime/node_modules/core-js',
      'react$': __dirname + '/node_modules/react/dist/react-with-addons.js',
    },
  },

  // Disable source maps for now
  // devtool: 'eval-cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      // Some definitions here
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'application',
      minChunks: 2,
      chunks: ['admin', 'partners']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
      chunks: ['application', 'diffux_ci', 'specs', 'activity_map'],
    }),
  ],

  externals: {
    jquery:  'jQuery',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?localIdentName=[path][name]--[local]--[hash:base64:10]!autoprefixer',
        include: [
          __dirname + '/app/assets',
          __dirname + '/node_modules/normalize.css',
        ],
      },
      {
        test: /\.scss$/,
        loader: 'style!css?localIdentName=[path][name]--[local]--[hash:base64:10]!autoprefixer!sass',
        include: __dirname + '/app/assets',
      },
      {
        test: /\.jsx?$/,
        loaders: [
          'babel-loader?cacheDirectory',
          'react-hot'
        ],
        exclude: [/node_modules/, /bower_components/, /support\/fixtures/],
        include: __dirname + '/app/assets',
      },
      {
        test: /app\/assets\/components\/(.*?)(?:\/index)?\.jsx/,
        loader: __dirname + '/app/assets/components_loader',
        include: __dirname + '/app/assets/components',
      },
      {
        test: /raven-js/,
        loaders: ['imports?this=>window'],
        include: __dirname + '/node_modules/raven-js',
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'file-loader',
        include: __dirname + '/app/assets',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: __dirname + '/app/assets',
      }
    ],
    noParse: [
      /acorn\/dist\/acorn\.js$/,
      /underscore\/underscore\.js$/,
      /react-with-addons\.js$/,
    ]
  },

  profile: true,
  stats: {
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: true,
    modules: true,
    reasons: true,
    children: true,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true
  },
};