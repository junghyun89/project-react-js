import React, { useEffect, useState } from 'react';
import styles from './ShoppingList.module.css';
import Alert from '../Alert/Alert';
import List from '../List/List';

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('shopping-list') || '[]');
}

const ShoppingList = (e) => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  function addList(e) {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        // 맵 돌려서 해당 id name만 변경된 새로운 list 만들어 주기
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  function showAlert(show = false, type = '', msg = '') {
    setAlert({ show, type, msg });
  }

  function editItem(id) {
    const selectedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(selectedItem.title);
  }

  function deleteItem(id) {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  }

  function clearList() {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  }

  useEffect(() => {
    localStorage.setItem('shopping-list', JSON.stringify(list));
  }, [list]);

  return (
    <main>
      <section className={styles['shopping-container']}>
        <div className={styles['header']}>
          <h2>shopping list</h2>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <form onSubmit={addList}>
            <input
              type="text"
              placeholder="e.g. eggs"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button className={styles['submit-btn']}>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </form>
        </div>
        {list.length > 0 && (
          <section className={styles['list-container']}>
            <List items={list} editItem={editItem} deleteItem={deleteItem} />
            <button className={styles['clear-btn']} onClick={clearList}>
              clear items
            </button>
          </section>
        )}
      </section>
    </main>
  );
};

export default ShoppingList;
