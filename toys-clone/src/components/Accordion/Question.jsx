import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  function setInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <article className="question">
      <div className="header">
        <h4>{title}</h4>
        <button className="btn" onClick={setInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
