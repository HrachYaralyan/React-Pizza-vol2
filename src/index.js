import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>
);

// reportWebVitals();

// install ES7+ React/Redux/React-Native snippets կարճ գրելաձևի համար
// imr === import React from 'react';
// rfc === export default func...

//for me `${}_${}`
