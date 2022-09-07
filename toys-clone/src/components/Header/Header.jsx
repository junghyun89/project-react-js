import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  let scroll1 = window.pageYOffset;

  function handleScroll() {
    let scroll2 = window.pageYOffset;
    scroll1 < scroll2 ? setShowNav(false) : setShowNav(true);
    scroll1 = scroll2;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <header className={showNav ? styles['header'] : styles['header hide']}>
      <div className={styles['header-container']}>
        <Link to="/">
          <h2>AnJung</h2>
        </Link>
        <p>React Projects</p>
      </div>
    </header>
  );
};

export default Header;
