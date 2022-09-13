import React from 'react';
import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${styles['modal-overlay']} ${
        isModalOpen ? styles['show-modal'] : ''
      }`}
    >
      <div className={styles['modal-container']}>
        <h3>modal content</h3>
        <FaTimes className={styles['close-modal-btn']} onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
