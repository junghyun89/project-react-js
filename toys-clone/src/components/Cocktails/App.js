import React from 'react';
import { AppProvider } from './context';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SingleCocktail from './pages/SingleCocktail/SingleCocktail';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail-:name" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
