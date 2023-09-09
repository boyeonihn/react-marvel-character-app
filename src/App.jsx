import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
