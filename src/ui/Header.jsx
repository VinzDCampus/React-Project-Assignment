import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>ProductHub</h1>
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;