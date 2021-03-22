import { hot } from 'react-hot-loader';
import React, { FC } from 'react';
import './app.less';

const App: FC<{}> = () => {
  return (
    <div styleName="container">
      <div styleName="teacherList">
        <li>唐老师</li>
        <li>彭老师</li>
        <li>曾老师</li>
        <li>王老师</li>
        <li>陈老师</li>
      </div>
    </div>
  );
};

export default hot(module)(App);
