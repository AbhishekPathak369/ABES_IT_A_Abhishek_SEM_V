import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Panda</div>

      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
       
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;