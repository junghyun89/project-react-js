import React from 'react';
import styles from './Navbar.module.css';
import { BsCart4 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav>
      <div className={styles['nav-center']}>
        <h3>useReducer</h3>
        <div className={styles['nav-container']}>
          <BsCart4 />
          <div className={styles['amount-container']}>
            <p className={styles['total-amount']}>4</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
