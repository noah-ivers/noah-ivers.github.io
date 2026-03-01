// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Main />
      <Skills />
      <Experience />
      <Contact />  {/* ⬅ add this */}
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();