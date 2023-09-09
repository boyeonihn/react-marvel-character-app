import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const { id } = useParams();

  const getCharacter = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );

    const json = await response.json();
    setCharacter(json.data.results[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading... </h3>}
      {!isLoading && (
        <CharacterDetail
          name={character.name}
          url={character.urls.find((url) => url.type === 'comiclink')}
          series={character.series.items}
          description={character.description}
          coverImage={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
      )}
    </div>
  );
};

export default Detail;
