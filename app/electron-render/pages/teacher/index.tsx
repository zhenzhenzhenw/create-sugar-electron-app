import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { config } from 'sugar-electron/render';
import App from './App';
import 'app/electron-render/common/styles/base.less';


const AppContainer = config.debug ? ReactHotAppContainer : Fragment;

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  );
});
