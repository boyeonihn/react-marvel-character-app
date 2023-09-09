import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FavoriteListContext } from '../App';

export const Character = ({ name, id, onClick, coverImage }) => {
  coverImage =
    coverImage !==
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      ? coverImage
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png';

  const { toggleFavorite } = useContext(FavoriteListContext);

  return (
    <section className="flex flex-col">
      <div className="h-3/5">
        <Link to={`/character/${id}`}>
          <img
            src={coverImage}
            className="w-full h-full object-cover"
            alt={name}
          />
        </Link>
      </div>

      <div className="bg-neutral-950 h-2/5 border-t-8 border-red-600 hover:bg-red-600 flex items-center">
        <h2 className="text-white-100 p-6 text-lg">
          <Link
            className="uppercase font-bold text-m decoration-white"
            to={`/character/${id}`}
          >
            {name}
          </Link>
        </h2>
        <span
          className="hover:cursor-pointer"
          onClick={() => {
            toggleFavorite({ name, id, coverImage });
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    </section>
  );
};

Character.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
