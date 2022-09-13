import React, { useState } from 'react';
import styles from './Question.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  function setInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <article className={styles['question']}>
      <div className={styles['header']}>
        <h4>{title}</h4>
        <button className={styles['btn']} onClick={setInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
