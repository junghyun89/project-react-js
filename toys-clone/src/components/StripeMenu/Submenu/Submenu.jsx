import React, { useEffect, useRef, useState } from 'react';
import styles from './Submenu.module.css';
import { useGlobalContext } from '../context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [location, links]);
  return (
    <aside
      className={`${styles.submenu} ${isSubmenuOpen ? styles.show : ''}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`${styles['submenu-center']} ${styles[columns]}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
