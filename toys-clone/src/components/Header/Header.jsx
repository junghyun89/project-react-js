import React, { useEffect, useState } from 'react';
import './Header.css';
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
    <header className={showNav ? '' : 'hide'}>
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
