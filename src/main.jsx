import React from 'react';
import ReactDom from 'react-dom'//interactua con el DOM del browser. Para renderizar comp en DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//crea la raiz para montar en el DOM con id root  viene de index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
