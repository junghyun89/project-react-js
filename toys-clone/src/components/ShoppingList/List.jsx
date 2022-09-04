import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, editItem, deleteItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="shopping-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <FaEdit className="edit-btn" onClick={() => editItem(id)} />
              <FaTrash className="delete-btn" onClick={() => deleteItem(id)} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
