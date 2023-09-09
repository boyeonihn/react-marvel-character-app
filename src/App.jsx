import { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './App.css';
import { useFavorites, useTheme } from './hooks';

export const FavoriteListContext = createContext([]);

function App() {
  const { theme } = useTheme();
  const { favorites, toggleFavorite } = useFavorites();

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
