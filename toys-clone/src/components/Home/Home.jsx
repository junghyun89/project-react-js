import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../Header/Header';
import { projectsData } from './projectsData';

const Home = () => {
  return (
    <>
      <Header />
      <section className="projects-section">
        <div className="projects-container">
          {projectsData.map((data) => (
            <Link to={data.link}>
              <div className="project">
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
