import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BDReminder from './components/BDReminder/BDReminder';
import Tours from './components/Tours/Tours';
import App from './App';
import Reviews from './components/Reviews/Reviews';
import Accordion from './components/Accordion/Accordion';
import Menu from './components/Menu/Menu';
import Tabs from './components/Tabs/Tabs';
import Slider from './components/Slider/Slider';
import LoremGenerator from './components/LoremGenerator/LoremGenerator';
import ColorGenerator from './components/ColorGenerator/ColorGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="BDreminder" element={<BDReminder />} />
      <Route path="tours" element={<Tours />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="menu" element={<Menu />} />
      <Route path="tabs" element={<Tabs />} />
      <Route path="slider" element={<Slider />} />
      <Route path="lorem-generator" element={<LoremGenerator />} />
      <Route path="color-generator" element={<ColorGenerator />} />
    </Routes>
  </BrowserRouter>
);
