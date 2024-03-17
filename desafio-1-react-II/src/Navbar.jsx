// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">🏠 Home</Link>
        <Link to="/contacto" className="nav-link">📱 Contacto</Link>
      </div>
      <span className="navbar-logo">Happy Cake 🍰</span>
    </nav>
  );
}

export default Navbar;
