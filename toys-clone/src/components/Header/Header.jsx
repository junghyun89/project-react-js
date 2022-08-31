import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <h2>AnJung</h2>
        </Link>
        <p>React Projects</p>
      </div>
    </header>
  );
};

export default Header;
