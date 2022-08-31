import React from 'react';
import './Tour.css';
import TourInfo from './TourInfo';

const Tour = ({ tours, removeTour }) => {
  return (
    <section className="tour-container">
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <TourInfo key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tour;
