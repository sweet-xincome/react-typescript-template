import React, { useEffect } from 'react';

import { User } from './pages/example';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    return;
  });

  return (
    <div>
      <User name={'测试'} age={10} />
    </div>
  );
};

export default App;
