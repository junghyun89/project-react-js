import React, { useEffect, useState } from 'react';
import styles from './LoremGenerator.module.css';
import data from './lorem-generatorData';

const Generator = () => {
  const [count, setCount] = useState(0);
  const [randomNums, setRandomNums] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let randomArray = [];
    for (let i = 0; i < count; i++) {
      const random = Math.floor(Math.random() * data.length);
      randomArray.push(random);
    }
    setRandomNums(randomArray);
  }

  return (
    <main>
      <section className={styles['generator-container']}>
        <h2>tired of boring lorem ipsum?</h2>
        <form
          action=""
          onSubmit={handleSubmit}
          className={styles['lorem-form']}
        >
          <label htmlFor="amount">paragraphs :</label>
          <input
            id="amount"
            type="number"
            min={0}
            placeholder="0"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button>generate</button>
        </form>
        <div className={styles['result']}>
          {randomNums.map((num, index) => (
            <p key={index}>{data[num]}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Generator;
