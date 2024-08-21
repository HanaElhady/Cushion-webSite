import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes }from 'react-router-dom'
import { Provider } from 'react-redux';
import { cart } from './Redux/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Provider store ={cart} >
    <App />
    </Provider>

  </BrowserRouter>
);

reportWebVitals();
