import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tour from './Tour';

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
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
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