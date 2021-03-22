const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.config.renderer.base.js');

const ProdConfig = {
  mode: 'production',
};

const webpackConfig = merge(BaseConfig, ProdConfig);

module.exports = webpackConfig;