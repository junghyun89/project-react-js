import React, { useEffect, useState } from 'react';
import data from './sliderData';
import './Slider.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState('');

  function checkNumber(number) {
    if (number < 0) {
      return (number = data.length - 1);
    }
    if (number > data.length - 1) {
      return 0;
    }
    return number;
  }

  function nextPerson() {
    setPosition('show-next');
    setIndex((prev) => {
      let newIndex = prev + 1;
      return checkNumber(newIndex);
    });
  }

  function prevPerson() {
    setPosition('show-last');
    setIndex((prev) => {
      let newIndex = prev - 1;
      return checkNumber(newIndex);
    });
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setPosition('show-next');
      setIndex((prev) => {
        let newIndex = prev + 1;
        return checkNumber(newIndex);
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const { id, image, name, title, quote } = data[index];
  return (
    <main>
      <section className="slider-container">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <article className={`person-section ${position}`} key={id}>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        <button className="prev" onClick={prevPerson}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextPerson}>
          <FiChevronRight />
        </button>
      </section>
    </main>
  );
};

export default Slider;
