import { app } from 'electron';
import { start } from 'sugar-electron/main';
import path from 'path';

const appName = 'electron-pick';
const basePath = __dirname;
const configPath = path.resolve('./config');       // 配置中心目录
const storePath = path.resolve('./app/store');     // 进程状态共享目录

global.APP_PATH = basePath;

// Load our code once ready
app.once('ready', () => {
  start({
    appName,
    basePath,
    configPath,
    storePath,
  });
  require('app/electron-main/main');
});
