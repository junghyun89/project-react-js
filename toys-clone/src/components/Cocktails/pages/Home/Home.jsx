import React from 'react';
import styles from './Home.module.css';
import CocktailList from '../../components/CocktailList/CocktailList';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
  return (
    <section>
      <SearchForm />
      <CocktailList />
    </section>
  );
};

export default Home;
