import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/user" className="nav-link">User</Link>
        <Link to="/admin" className="nav-link">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
