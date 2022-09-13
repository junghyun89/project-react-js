import React, { useEffect, useState } from 'react';
import styles from './SingleColor.module.css';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;

  function copyValue() {
    navigator.clipboard.writeText(hexValue);
    setAlert(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={`${styles['color']} ${index > 10 && styles['color-light']}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <span className={styles['percent-value']}>{weight}%</span>
      <span className={styles['color-value']} onClick={copyValue}>
        {hexValue}
      </span>
      {alert && <p className={styles['alert']}>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
