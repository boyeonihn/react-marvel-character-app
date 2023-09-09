import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Avengers Assemble</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/favorite-list`}>Cart {`(${cart})`}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
