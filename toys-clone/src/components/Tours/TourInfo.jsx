import React, { useState } from 'react';

const TourInfo = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  function setInfo() {
    setReadMore(!readMore);
  }

  return (
    <article className="tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={setInfo}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default TourInfo;
