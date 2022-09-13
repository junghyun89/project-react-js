import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';
import styles from './Tabs.module.css';

const url = 'https://course-api.com/react-tabs-project';
const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <section className={styles['tabs-container']}>
        <div className={styles['title']}>
          <h2>experience</h2>
          <div className={styles['underline']}></div>
        </div>
        <Jobs jobs={jobs} />
        <button className={styles['btn']}>more info</button>
      </section>
    </main>
  );
};

export default Tabs;
