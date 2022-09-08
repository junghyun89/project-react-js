import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <div className={styles['nav-center']}>
        <Link to="/cocktails">
          <p className={styles['logo']}>
            The<span>Cocktail</span>DB
          </p>
        </Link>
        <ul className={styles['nav-links']}>
          <li>
            <Link to="/cocktails">home</Link>
          </li>
          <li>
            <Link to="/cocktails/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
