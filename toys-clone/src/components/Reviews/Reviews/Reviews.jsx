import React from 'react';
import Review from '../Review/Review';
import styles from './Reviews.module.css';

const Reviews = () => {
  return (
    <main>
      <section className={styles['review-container']}>
        <div className={styles['title']}>
          <h2>our reviews</h2>
          <div className={styles['underline']}></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Reviews;
