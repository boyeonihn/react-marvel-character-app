import { useState, useEffect } from 'react';
import { Character } from '../components/Character';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getCharacters = async () => {
    const response = await fetch(
      'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
    );
    const json = await response.json();
    console.log(json.data.results);

    setData(json.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <main className="grid gap-4 grid-cols-4">
      {!isLoading &&
        data.map((character) => (
          <Character
            key={character.id}
            id={character.id}
            name={character.name}
            description={character.description}
            coverImage={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))}
    </main>
  );
};

export default Home;
