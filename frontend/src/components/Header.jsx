import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';

export default function Header() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <header>
      <Link to="/" className="logo">IndLocal</Link>
      <nav>
        <Link to="/create">Post Listing</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button className="theme-toggle" onClick={toggleTheme}></button>
      </nav>
    </header>
  );
}