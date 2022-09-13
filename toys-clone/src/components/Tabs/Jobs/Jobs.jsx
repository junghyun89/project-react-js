import React, { useState } from 'react';
import styles from './Jobs.module.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Jobs = ({ jobs }) => {
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];
  return (
    <div className={styles['jobs-container']}>
      <div className={styles['btns']}>
        {jobs.map((job, index) => (
          <button
            key={job.id}
            className={`${styles['job-btn']}
              ${index === value ? styles['active-btn'] : ''}
            }`}
            onClick={() => setValue(index)}
          >
            {job.company}
          </button>
        ))}
      </div>
      <article className={styles['job-info']}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className={styles['job-date']}>{dates}</p>
        {duties.map((duty, index) => (
          <div className={styles['job-desc']} key={index}>
            <FaAngleDoubleRight className={styles['job-icon']} />
            <p>{duty}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Jobs;
