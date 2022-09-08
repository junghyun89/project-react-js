import React from 'react';
import styles from './Cocktail.module.css';
import { Link } from 'react-router-dom';

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className={styles['cocktail']}>
      <div className={styles['img-container']}>
        <img src={image} alt={name} />
      </div>
      <div className={styles['cocktail-footer']}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link
          to={`/cocktails/cocktail-${id}`}
          className={styles['btn-details']}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
