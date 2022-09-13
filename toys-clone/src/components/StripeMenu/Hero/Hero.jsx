import React from 'react';
import styles from './Hero.module.css';
import phoneImg from '../images/phone.svg';
import { useGlobalContext } from '../context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  
  return (
    <div className={styles['hero']} onMouseOver={closeSubmenu}>
      <div className={styles['hero-center']}>
        <article className={styles['hero-info']}>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className={styles['start-btn']}>Start now</button>
        </article>
        <article className={styles['hero-images']}>
          <img src={phoneImg} className={styles['phone-img']} alt="phone" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
