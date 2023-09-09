import { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

export const FavoriteListContext = createContext([]);

function App() {
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);
  const [brought, setBrought] = useState(false);

  const toggleFavorite = ({ name, id, coverImage }) => {
    favorites.find((item) => item.name === name)
      ? setFavorites((prevList) =>
          prevList.filter((item) => item.name !== name)
        )
      : setFavorites([...favorites, { name, id, coverImage }]);
  };

  // const toggleTheme = () => {
  //   setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  // };

  const bringLocalData = () => {
    if ('marvel-favorites' in localStorage) {
      const json = JSON.parse(localStorage.getItem('marvel-favorites'));
      console.log('bringing localstorage', { json });
      setFavorites(json);
      console.log('there was data and we brought it!');
    }
    setBrought(true);
  };

  const saveLocalData = () => {
    const json = JSON.stringify(favorites);
    localStorage.setItem('marvel-favorites', json);
    console.log('save local', { favorites });
  };

  useEffect(() => {
    console.log('# bringing data...');
    bringLocalData();
  }, []);

  useEffect(() => {
    if (brought) {
      saveLocalData();
    }
  }, [favorites]);

  return (
    <div className="w-full h-full">
      <FavoriteListContext.Provider
        value={{
          favorites: favorites === undefined ? [] : favorites,
          toggleFavorite,
        }}
      >
        <Header />
        <Outlet />
      </FavoriteListContext.Provider>
    </div>
  );
}

export default App;
