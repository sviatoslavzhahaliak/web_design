import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <Link to="/" className="logo">🏎️ CarPremium</Link>
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
      </ul>
    </nav>
  </header>
);
export default Header;