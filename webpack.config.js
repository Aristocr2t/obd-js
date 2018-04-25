const { DefinePlugin, LoaderOptionsPlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { resolve } = require('path');

const nodeEnv = process.env.NODE_ENV || 'development',
  isProd = nodeEnv === 'production';

const config = {
  mode: nodeEnv,
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: resolve('./src'),
  entry: {
    index: './index.ts'
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts?$/,
        exclude: ['node_modules'],
        use: ['awesome-typescript-loader', 'source-map-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        ie8: false,
        ecma: 6,
        warnings: true,
        mangle: isProd, // debug false
        output: {
          comments: false,
          beautify: !isProd,  // debug true
        }
      },
      sourceMap: true
    }),
    new DefinePlugin({
      'process.env': {
        // eslint-disable-line quote-props
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    })
  ]
};

module.exports = config;
