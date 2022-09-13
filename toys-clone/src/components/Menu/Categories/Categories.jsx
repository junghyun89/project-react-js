import React from 'react';
import styles from './Categories.module.css';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles['btn-container']}>
      {categories.map((category, index) => (
        <button
          className={styles['filter-btn']}
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
