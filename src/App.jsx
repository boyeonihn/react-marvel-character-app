import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

export const FavoriteListContext = createContext([]);
function App() {
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = ({ name, id, coverImage }) => {
    favorites.find((item) => item.name === name)
      ? setFavorites((prevList) =>
          prevList.filter((item) => item.name !== name)
        )
      : setFavorites([...favorites, { name, id, coverImage }]);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="w-full h-full">
      <FavoriteListContext.Provider value={{ favorites, toggleFavorite }}>
        <Header />
        <Outlet />
      </FavoriteListContext.Provider>
    </div>
  );
}

export default App;
