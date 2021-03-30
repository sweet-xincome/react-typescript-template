import React, { useEffect } from 'react';

import TodoList from './components/TodoList/index';

import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    return;
  });

  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
