const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.config.main.base.js');

const DevConfig = {
  mode: 'development'
};

const webpackConfig = merge(BaseConfig, DevConfig);

module.exports = webpackConfig;