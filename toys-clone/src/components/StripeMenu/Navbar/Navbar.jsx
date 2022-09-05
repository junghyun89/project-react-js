import React from 'react';
import styles from './Navbar.module.css';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  function displaySubmenu(e) {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }
  function handleSubmenu(e) {
    if (e.target.classList.value.search('link-btn') === -1) {
      closeSubmenu();
    }
  }

  return (
    <nav className={styles['nav']} onMouseOver={handleSubmenu}>
      <div className={styles['nav-center']}>
        <div className={styles['nav-header']}>
          <img src={logo} className={styles['nav-logo']} alt="stripe" />
          <button className={styles['toggle-btn']} onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className={styles['nav-links']}>
          <li>
            <button className={styles['link-btn']} onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className={styles['link-btn']} onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className={styles['link-btn']} onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className={styles['signin-btn']}>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
