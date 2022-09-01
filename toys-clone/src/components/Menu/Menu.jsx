import React, { useState } from 'react';
import './Menu.css';
import items from './menuData';
import Categories from './Categories';
import MenuItem from './MenuItem';

// all은 하드로 추가해줌
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  function filterItems(category) {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu menu-container">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuItem items={menuItems} />
      </section>
    </main>
  );
};

export default Menu;
