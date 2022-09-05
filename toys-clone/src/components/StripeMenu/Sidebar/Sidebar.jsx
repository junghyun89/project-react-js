import React from 'react';
import styles from './Sidebar.module.css';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../menuData';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${styles.sidebar_wrapper} ${
        isSidebarOpen ? styles.show : ''
      }`}
    >
      <div className={styles.sidebar}>
        <button className={styles.close_btn} onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className={styles.sidebar_links}>
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className={styles.sidebar_sublinks}>
                  {links.map((link) => {
                    const { label, icon, url } = link;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
