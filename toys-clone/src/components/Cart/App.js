import React from 'react';
import Navbar from './Navbar/Navbar';
import CartContainer from './CartContainer/CartContainer';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <CartContainer />
    </AppProvider>
  );
};

export default App;
