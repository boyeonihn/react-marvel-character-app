import { useCallback, useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [brought, setBrought] = useState(false);

  const toggleFavorite = useCallback(
    ({ name, id, coverImage }) => {
      favorites.find((item) => item.name === name)
        ? setFavorites((prevList) =>
            prevList.filter((item) => item.name !== name)
          )
        : setFavorites([...favorites, { name, id, coverImage }]);
    },
    [favorites, setFavorites]
  );

  const bringLocalData = () => {
    if ('marvel-favorites' in localStorage) {
      const json = JSON.parse(localStorage.getItem('marvel-favorites'));
      setFavorites(json);
    }
    setBrought(true);
  };

  const saveLocalData = () => {
    const json = JSON.stringify(favorites);
    localStorage.setItem('marvel-favorites', json);
  };

  useEffect(() => {
    bringLocalData();
  }, []);

  useEffect(() => {
    if (brought) {
      saveLocalData();
    }
  }, [favorites]);

  return { favorites, toggleFavorite };
};
