import React, { useRef } from 'react';
import styles from './SearchForm.module.css';
import { useGlobalContext } from '../../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles['search']}>
      <form className={styles['search-form']} onSubmit={handleSubmit}>
        <label htmlFor="name">search your favorite cocktail</label>
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </div>
  );
};

export default SearchForm;
