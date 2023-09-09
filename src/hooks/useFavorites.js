import { useCallback } from 'react';

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

  return { favorites, toggleFavorite };
};
