import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>Bookstore</h1>
      <Link to="/">Bookpage</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
}

export default Nav;
