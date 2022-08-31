import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BDReminder from './components/BDReminder/BDReminder';
import Tours from './components/Tours/Tours';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="BDreminder" element={<BDReminder />} />
      <Route path="tours" element={<Tours />} />
    </Routes>
  </BrowserRouter>
);
