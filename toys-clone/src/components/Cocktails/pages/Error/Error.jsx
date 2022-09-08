import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => {
  return (
    <section className={styles['error-container']}>
      <p>oops! it's a dead end</p>
      <Link to="/cocktails" className={styles['btn-primary']}>
        back home
      </Link>
    </section>
  );
};

export default Error;
