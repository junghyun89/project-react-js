import React, { useContext, useState } from 'react';
import cartItems from './cartData';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);

  return (
    <AppContext
      value={{
        cart,
      }}
    >
      {children}
    </AppContext>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
