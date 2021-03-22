const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.config.renderer.base.js');
const webpack = require('webpack');

const DevConfig = {
  mode: 'development',
  devServer: {
    contentBase: global.OUTPUT_DIRECTORY, // 编译好的文件放在这里
    compress: true,
    hotOnly: true,
    port: 9000, // 本地开发服务器端口
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

const webpackConfig = merge(BaseConfig, DevConfig);

module.exports = webpackConfig;
