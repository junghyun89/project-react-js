import React, { useEffect, useState } from 'react';
import styles from './SingleCocktail.module.css';
import Loading from '../../components/Loading/Loading';
import { useParams, Link } from 'react-router-dom';

const SingleCocktail = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  async function getCocktail(url) {
    setLoading(true);
    try {
      const response = await fetch(`${url}${name}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: drink,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          drink,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCocktail('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }, [name]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className={styles['section-title']}>no cocktail to display</h2>;
  }
  const { drink, image, category, info, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className={styles['cocktail-section']}>
      <Link to="/cocktails" className={styles['btn-primary']}>
        back home
      </Link>
      <h2 className={styles['section-title']}>{drink}</h2>
      <div className={styles['drink']}>
        <img src={image} alt={drink} />
        <div className={styles['drink-info']}>
          <p>
            <span className={styles['drink-data']}>name : </span>
            {name}
          </p>
          <p>
            <span className={styles['drink-data']}>category : </span>
            {category}
          </p>
          <p>
            <span className={styles['drink-data']}>info : </span>
            {info}
          </p>
          <p>
            <span className={styles['drink-data']}>glass : </span>
            {glass}
          </p>
          <p>
            <span className={styles['drink-data']}>instructions : </span>
            {instructions}
          </p>
          <p>
            <span className={styles['drink-data']}>ingredients : </span>
            {ingredients.filter((item) => item !== null).join(', ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
