import React from 'react';
import styles from './List.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, editItem, deleteItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className={styles['shopping-item']} key={id}>
            <p className={styles['title']}>{title}</p>
            <div className={styles['btn-container']}>
              <FaEdit
                className={styles['edit-btn']}
                onClick={() => editItem(id)}
              />
              <FaTrash
                className={styles['delete-btn']}
                onClick={() => deleteItem(id)}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
