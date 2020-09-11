/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'vue-carousel.min.js',
  },
  plugins: [
    new TerserPlugin({
      cache: true,
      sourceMap: false,
    }),
  ],
});
