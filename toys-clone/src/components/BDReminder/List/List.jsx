import React from 'react';
import styles from './List.module.css';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className={styles['person']}>
            <img src={image} alt={name} />
            <div className={styles['personal-info']}>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
