import { hot } from 'react-hot-loader';
import React, { FC } from 'react';
import { store, windowCenter } from 'sugar-electron';
const inclassModule = store.getModule('inclass');
import './app.less';

const App: FC<{}> = () => {
  const openTeacher = () => {
    windowCenter.teacher.open();
  };
  console.log('=inclassModule',inclassModule)
  return (
    <div styleName="container">
      <div styleName="className">{inclassModule.state.className}</div>
      <div styleName="openTeacher" onClick={openTeacher}>
        查看该班级教师
      </div>
    </div>
  );
};

export default hot(module)(App);
