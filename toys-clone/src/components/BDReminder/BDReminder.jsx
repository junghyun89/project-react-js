import React, { useState } from 'react';
import './BDReminder.css';
import data from './peopleData';
import List from './List';

const BDReminder = () => {
  const [people, setPeople] = useState(data);
  function clearAll() {
    let peopleArray = data;
    people.length === 0 ? setPeople(peopleArray) : setPeople([]);
  }

  return (
    <main>
      <section className="reminder-container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={clearAll}>
          {people.length === 0 ? 'Go Back' : 'Clear All'}
        </button>
      </section>
    </main>
  );
};

export default BDReminder;
