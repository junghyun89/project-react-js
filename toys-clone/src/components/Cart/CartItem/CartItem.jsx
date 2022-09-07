import React from 'react';
import styles from './CartItem.module.css';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, toggleAmount } = useGlobalContext();

  return (
    <article className={styles['cart-item']}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className={styles['item-price']}>${price}</h4>
        <button className={styles['remove-btn']} onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <FaAngleUp
          className={styles['amount-btn']}
          onClick={() => toggleAmount(id, 'inc')}
        />
        <p className={styles['amount']}>{amount}</p>
        <FaAngleDown
          className={styles['amount-btn']}
          onClick={() => toggleAmount(id, 'dec')}
        />
      </div>
    </article>
  );
};

export default CartItem;
