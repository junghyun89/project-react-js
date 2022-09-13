import React, { useState } from 'react';
import data from '../questionsData';
import styles from './Accordion.module.css';
import Question from '../Question/Question';

const Accordion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className={styles['accordion-container']}>
        <h3>questions and answers about login</h3>
        <div className={styles['info']}>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Accordion;
