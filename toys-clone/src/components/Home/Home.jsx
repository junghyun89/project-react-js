import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Header from './Header/Header';
import { projectsData } from './projectsData';

const Home = () => {
  return (
    <>
      <Header />
      <section className={styles['projects-section']}>
        <div className={styles['projects-container']}>
          {projectsData.map((data) => (
            <Link to={data.link}>
              <div className={styles['project']}>
                <img src={data.image} alt="" />
                <p>{data.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
