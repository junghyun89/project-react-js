import React, { useState } from 'react';
import styles from './Reminder.module.css';
import data from '../peopleData';
import List from '../List/List';

const BDReminder = () => {
  const [people, setPeople] = useState(data);
  function clearAll() {
    let peopleArray = data;
    people.length === 0 ? setPeople(peopleArray) : setPeople([]);
  }

  return (
    <main>
      <section className={styles['reminder-container']}>
        <h3 className={styles['header']}>{people.length} birthdays today</h3>
        <List people={people} />
        <button className={styles['clear-btn']} onClick={clearAll}>
          {people.length === 0 ? 'Go Back' : 'Clear All'}
        </button>
      </section>
    </main>
  );
};

export default BDReminder;
