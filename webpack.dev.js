/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');

const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  devtool: 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/
});
