import React from 'react';
import styles from './Sidebar.module.css';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from '../sidebarData';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${styles['sidebar']} ${
        isSidebarOpen ? styles['show-sidebar'] : ''
      }`}
    >
      <div className={styles['sidebar-header']}>
        <h3 className={styles['logo']}>AnJung</h3>
        <FaTimes className={styles['close-btn']} onClick={closeSidebar} />
      </div>
      <ul className={styles['links']}>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={styles['social-icons']}>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
