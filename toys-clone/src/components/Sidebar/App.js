import React from 'react';
import Home from './Home';
import Modal from './Modal/Modal';
import Sidebar from './Sidebar/Sidebar';
import './index.css';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  );
};

export default App;
