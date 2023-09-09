import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full m-1 font-sans font-bold bg-black flex flex-col items-center">
      <h1 className="m-5 w-2/5 text-red-50 bg-red-600 py-3 tracking-[-.105em] text-8xl">
        <Link to="/">MARVEL</Link>
      </h1>
      <nav>
        <Link to={`/favorite-list`}>Favorite Characters {`(${0})`}</Link>
      </nav>
    </header>
  );
};

export default Header;
