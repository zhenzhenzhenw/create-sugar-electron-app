const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
global.ROOT_DIRECTORY = path.join(__dirname, '..')
global.SRC_DIRECTORY = path.join(global.ROOT_DIRECTORY, 'app')
global.OUTPUT_DIRECTORY = path.join(global.ROOT_DIRECTORY, 'dist')

module.exports = {
  entry: path.resolve(global.ROOT_DIRECTORY, 'main'),
  target: 'electron-main',
  node: {
    __filename: true,
    __dirname: true
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'app': global.SRC_DIRECTORY,
      'main':  path.join(global.SRC_DIRECTORY, 'electron-main')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: global.OUTPUT_DIRECTORY,
    filename: 'electron.js'
  },
  plugins: [
    // 用于打包后的主进程中正确获取__dirname
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
}