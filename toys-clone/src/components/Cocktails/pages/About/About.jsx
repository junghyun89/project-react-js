import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles['about-container']}>
      <h2 className={styles['section-title']}>about us</h2>
      <div className={styles['desc-box']}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, qui.
          Dolor expedita nostrum possimus officiis saepe sapiente tempore tempora,
          totam temporibus. Sit, fugit adipisci rerum non labore esse expedita
          architecto?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, qui.
          Dolor expedita nostrum possimus officiis saepe sapiente tempore tempora,
          totam temporibus. Sit, fugit adipisci rerum non labore esse expedita
          architecto?
        </p>
      </div>
    </section>
  );
};

export default About;
