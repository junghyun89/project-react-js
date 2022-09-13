import React, { useState } from 'react';
import styles from './ColorGenerator.module.css';
import Values from 'values.js';
import SingleColor from '../SingleColor/SingleColor';

const ColorGenerator = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#6d6462').all(10));

  function handelSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <main>
      <div className={styles['color-container']}>
        <div className={styles['header']}>
          <h2>color generator</h2>
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#6d6462"
              className={`${error ? styles['error'] : null}`}
            />
            <button>submit</button>
          </form>
        </div>
        <div className={styles['colors']}>
          {list.map((color, index) => (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ColorGenerator;
