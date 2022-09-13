import React, { useEffect } from 'react';
import styles from './Alert.module.css';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`${styles['alert']} ${styles[type]}`}>{msg}</p>;
};

export default Alert;
