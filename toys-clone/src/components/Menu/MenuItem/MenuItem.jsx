import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ items }) => {
  return (
    <div className={styles['item-section']}>
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className={styles['menu-item']}>
            <img src={img} alt={title} className={styles['photo']} />
            <div className={styles['item-info']}>
              <div className={styles['header']}>
                <h4>{title}</h4>
                <h4 className={styles['price']}>${price}</h4>
              </div>
              <p className={styles['item-text']}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItem;
