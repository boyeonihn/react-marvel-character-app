import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const { id } = useParams();
};

export default Detail;
