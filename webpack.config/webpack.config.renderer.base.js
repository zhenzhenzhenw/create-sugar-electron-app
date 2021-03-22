const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
global.ROOT_DIRECTORY = path.join(__dirname, '..');
global.SRC_DIRECTORY = path.join(global.ROOT_DIRECTORY, 'app');
global.OUTPUT_DIRECTORY = path.join(global.ROOT_DIRECTORY, 'dist');

const appPath = path.join(global.SRC_DIRECTORY, 'electron-render/pages');
const items = fs.readdirSync(appPath);
const entry = {};
items.forEach((item) => {
  const itemPath = path.join(appPath, item);
  if (fs.statSync(itemPath).isDirectory()) {
    entry[item] = path.join(itemPath);
  }
});

module.exports = {
  entry: entry,
  context: global.SRC_DIRECTORY,
  output: {
    filename: '[name].js',
    library: 'MyLibrary',
    libraryTarget: 'umd', // 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。
    path: global.OUTPUT_DIRECTORY,
  },
  target: 'electron-renderer',
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.react.js', '.ttf'],
    alias: {
      app: global.SRC_DIRECTORY,
      render: path.join(global.SRC_DIRECTORY, 'electron-render'),
      '@resources': path.join(global.ROOT_DIRECTORY, 'resources'),
      '@projectAid': path.join(global.SRC_DIRECTORY, 'render/pages/projectAid'),
      '@studentSimulation': path.join(global.SRC_DIRECTORY, 'render/pages/studentSimulation'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        include: global.SRC_DIRECTORY,
        use: ['happypack/loader?id=babel'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        exclude: [/node_modules/],
        use: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images/',
          esModule: false,
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          'less-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(global.SRC_DIRECTORY, `electron-render/common/styles/fn.less`),
                path.resolve(global.SRC_DIRECTORY, `electron-render/common/styles/variable.less`),
              ],
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    ...newHtmlPlugin(entry),
    new HappyPack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            cacheDirectory: './webpack_cache/',
          },
        },
      ],
    }),
  ],
};

function newHtmlPlugin(entry) {
  let list = [];
  Object.keys(entry).forEach((key) => {
    const template = `${entry[key]}/index.html`;
    if (fs.existsSync(template)) {
      list.push(
        new HtmlWebpackPlugin({
          template: template,
          filename: `${key}.html`,
          hash: false,
          chunks: [key, 'common'],
        })
      );
    } else {
      console.log('not Found HTML', key);
    }
  });
  return list;
}
