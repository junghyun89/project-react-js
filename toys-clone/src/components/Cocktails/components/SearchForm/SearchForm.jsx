import React, { useRef } from 'react';
import styles from './SearchForm.module.css';
import { useGlobalContext } from '../../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  function searchCocktail() {}
  return (
    <section className={styles['search']}>
      <form className={styles['search-form']}>
        <label htmlFor="name">search your favorite cocktail</label>
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </section>
  );
};

export default SearchForm;
