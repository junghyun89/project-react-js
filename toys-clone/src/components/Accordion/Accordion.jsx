import React, { useState } from 'react';
import data from './questionsData';
import './Accordion.css';
import Question from './Question';

const Accordion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="accordion-container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
