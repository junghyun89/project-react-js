import React, { useState } from 'react';
import styles from './TourInfo.module.css';

const TourInfo = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  function setInfo() {
    setReadMore(!readMore);
  }

  return (
    <article className={styles['tour']} key={id}>
      <img className={styles['tour-img']} src={image} alt={name} />
      <footer>
        <div className={styles['tour-info']}>
          <h4>{name}</h4>
          <h4 className={styles['tour-price']}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className={styles['read-btn']} onClick={setInfo}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className={styles['delete-btn']} onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default TourInfo;
