import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import Tour from '../Tour/Tour';
import styles from './Tours.module.css';

const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
          <h2 className={styles['title']}>no tours left</h2>
          <button className={styles['btn']} onClick={fetchTours}>
            refresh
          </button>
      </main>
    );
  }
  return (
    <main>
      <Tour tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default Tours;
