import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main className="sidebar-home-container">
      <FaBars className="sidebar-toggle" onClick={openSidebar} />
      <button className="show-modal" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
