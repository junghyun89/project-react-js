import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BDReminder from './components/BDReminder/Reminder/Reminder';
import Tours from './components/Tours/Tours/Tours';
import App from './App';
import Reviews from './components/Reviews/Reviews/Reviews';
import Accordion from './components/Accordion/Accordion/Accordion';
import Menu from './components/Menu/Menu/Menu';
import Tabs from './components/Tabs/Tabs/Tabs';
import Slider from './components/Slider/Slider';
import LoremGenerator from './components/LoremGenerator/LoremGenerator';
import ColorGenerator from './components/ColorGenerator/ColorGenerator/ColorGenerator';
import ShoppingList from './components/ShoppingList/ShoppingList/ShoppingList';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/App';
import StripeMenu from './components/StripeMenu/App';
import Cart from './components/Cart/App';
import Cocktails from './components/Cocktails/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="birthday-reminder" element={<BDReminder />} />
      <Route path="tours" element={<Tours />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="menu" element={<Menu />} />
      <Route path="tabs" element={<Tabs />} />
      <Route path="slider" element={<Slider />} />
      <Route path="lorem-generator" element={<LoremGenerator />} />
      <Route path="color-generator" element={<ColorGenerator />} />
      <Route path="shopping-list" element={<ShoppingList />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path="sidebar" element={<Sidebar />} />
      <Route path="stripe-menu" element={<StripeMenu />} />
      <Route path="cart" element={<Cart />} />
      <Route path="cocktails/*" element={<Cocktails />}></Route>
    </Routes>
  </BrowserRouter>
);
