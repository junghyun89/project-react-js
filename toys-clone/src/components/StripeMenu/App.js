import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Submenu from './Submenu/Submenu';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
};

export default App;
