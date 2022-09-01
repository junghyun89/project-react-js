import React from 'react';
import Review from './Review';
import './Reviews.css';

const Reviews = () => {
  return (
    <main>
      <section className="review-container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Reviews;
