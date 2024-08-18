import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file to style your footer

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dataset">Dataset</Link></li>
        <li><Link to="/models-used">Models Used</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
      <div className="copyright">
        <p>&copy; {currentYear} TennisTrack. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
