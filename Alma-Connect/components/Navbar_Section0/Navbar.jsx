import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          UVCE Connect
        </a>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/events" className="nav-link">Events</a>
          </li>
          <li className="nav-item">
            <a href="/mentorship" className="nav-link">Mentorship</a>
          </li>
          <li className="nav-item">
            <a href="/jobs" className="nav-link">Job Board</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link login-btn">Login</a>
          </li>
          <li className="nav-item">
            <a href="/register" className="nav-link register-btn">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;