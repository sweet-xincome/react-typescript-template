/*
 * @Author: your name
 * @Date: 2021-03-29 16:53:57
 * @LastEditTime: 2021-03-31 13:46:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /view-station/src/App.tsx
 */
import React, { useEffect } from 'react';

import TodoList from './components/TodoList/index';

import './App.css';
import Login from './components/Login';

const App: React.FC = () => {
  useEffect(() => {
    return;
  });

  return (
    <div className="App">
      <TodoList />
      <Login />
    </div>
  );
};

export default App;
