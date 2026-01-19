import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Products
          </NavLink>
        </li>
        <li>
          <a href="/products.html" className="nav-link">
            Static Page
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;