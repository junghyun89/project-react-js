import React from 'react';
import styles from './Tour.module.css';
import TourInfo from '../TourInfo/TourInfo';

const Tour = ({ tours, removeTour }) => {
  return (
    <section className={styles['tour-container']}>
      <div className={styles['title']}>
        <h2>our tours</h2>
        <div className={styles['underline']}></div>
      </div>
      {tours.map((tour) => {
        return <TourInfo key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tour;
