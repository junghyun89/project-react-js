import React from 'react';
import styles from './CocktailList.module.css';
import { useGlobalContext } from '../../context';
import Loading from '../Loading/Loading';
import Cocktail from '../Cocktail/Cocktail';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className={styles['section-title']}>
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <div>
      <h2 className={styles['section-title']}>cocktails</h2>
      <div className={styles['cocktails-center']}>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
