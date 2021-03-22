import { Service, BaseWindow } from 'sugar-electron/main';
import path from 'path';

class CodeMain {
  main(): void {
    this.initBrowser();
    this.startService(); // 启动服务进程 background process
  }
  private initBrowser(): void {
    // 初始化窗口配置
    BaseWindow.setDefaultOption({
      show: false,
      resizable: false,
      focusable: true,
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
      },
    });
    // 引入初始化窗口的代码
    require('./windowCenter');
  }
  private startService(): void {
    const service = new Service('service', path.resolve(global.APP_PATH, 'app/service'));
    service.on('success', function () {
      console.log('service start success');
    });
    service.on('fail', function () {
      console.log('service start fail');
    });
    service.on('closed', function () {
      console.log('service closed');
    });
    service.on('crashed', function () {
      console.log('service crashed');
    });
  }
}

// Main Startup
const code = new CodeMain();
code.main();
