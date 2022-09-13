import React, { useState } from 'react';
import people from '../reviewsData';
import styles from './Review.module.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  function checkNumber(number) {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }
  function prevPerson() {
    setIndex((prev) => {
      let newIndex = prev - 1;
      return checkNumber(newIndex);
    });
  }
  function nextPerson() {
    setIndex((prev) => {
      let newIndex = prev + 1;
      return checkNumber(newIndex);
    });
  }
  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className={styles['review']}>
      <div className={styles['img-container']}>
        <img src={image} alt={name} className={styles['person-img']} />
        <span className={styles['quote-icon']}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles['author']}>{name}</h4>
      <p className={styles['job']}>{job}</p>
      <p className={styles['info']}>{text}</p>
      <div className={styles['button-container']}>
        <button className={styles['prev-btn']} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={styles['next-btn']} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={styles['random-btn']} onClick={randomPerson}>
        show random
      </button>
    </article>
  );
};

export default Review;
