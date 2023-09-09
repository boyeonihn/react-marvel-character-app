import { Link } from 'react-router-dom';
import { FavoriteListContext } from '../App';
import { useContext } from 'react';

const Header = () => {
  const { favorites } = useContext(FavoriteListContext);

  return (
    <header className="w-full m-1 font-sans font-bold bg-black flex flex-col items-center">
      <h1 className="text-center m-5 w-96 text-red-50 bg-red-600 py-3 tracking-[-.105em] text-8xl">
        <Link to="/">MARVEL</Link>
      </h1>
      <nav>
        <Link to={`/favorite-list`}>
          Favorite Characters {`(${favorites.length})`}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
