import { useContext } from 'react';
import { FavoriteListContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FavoriteList = () => {
  const { favorites, toggleFavorite } = useContext(FavoriteListContext);

  return (
    <main className="m-5">
      <h2 className="text-red-600 font-bold text-2xl my-3">
        FAVORITED MARVEL SUPERHEROS
      </h2>
      <ul className="text-black">
        {favorites.length === 0 ? (
          <p className="py-3">
            You currently don't have any characters on this list.
            <br /> Add some characters to your favorites list by browsing{' '}
            <Link
              className="font-bold hover:text-red-600 hover:text-2xl"
              to="/"
            >
              here!
            </Link>
          </p>
        ) : (
          ''
        )}
    </main>
  );
};

export default FavoriteList;
