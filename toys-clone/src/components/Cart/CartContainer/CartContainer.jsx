import React from 'react';
import styles from './CartContainer.module.css';
import { useGlobalContext } from '../context';
import CartItem from '../CartItem/CartItem';

const CartContainer = () => {
  const { cart, loading, total, clearCart } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  if (cart.length === 0) {
    return (
      <section className={styles['cart']}>
        <header>
          <h2>your bag</h2>
          <h4 className={styles['empty-cart']}>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className={styles['cart']}>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className={styles['cart-total']}>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className={styles['clear-btn']} onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
