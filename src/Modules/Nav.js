import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1 className="logo">Bookstore</h1>
      <Link className="links" to="/">Bookpage</Link>
      <Link className="links" to="/categories">Categories</Link>
    </nav>
  );
}

export default Nav;
