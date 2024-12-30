import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo-image" src={logo} alt="KamDone Logo" />
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
        <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
        <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
        <Link to="/support" className="nav-link" onClick={toggleMenu}>Support</Link>
      </nav>
    </header>
  );
};

export default Header;
