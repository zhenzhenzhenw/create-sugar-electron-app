import { BaseWindow, config } from 'sugar-electron/main';
import getFileName from '../utils/getFileName';
import { WIN_CONFIG } from '../const';

const name = getFileName(__filename);
const url = config.debug ? `http:localhost:9000/${name}.html` : `file://${global.APP_PATH}/${name}.html`;
const baseWindow = new BaseWindow(name, {
  url,
  width: WIN_CONFIG.WIN_WIDTH,
  height: WIN_CONFIG.WIN_HEIGHT,
});

baseWindow.on('ready-to-show', () => {
  console.log(`window ${name} ready-to-show`);

  const instance = baseWindow.getInstance();
  if (instance) {
    instance.show();
  }
});
baseWindow.open();

export default baseWindow;