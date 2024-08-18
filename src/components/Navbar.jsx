import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file to style your navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/tennis_racket_logo.png" alt="Tennis Racket Logo" className="logo-image" />
        <span className="logo-text">TennisTrack</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dataset">Dataset</Link></li>
        <li><Link to="/models-used">Models Used</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
