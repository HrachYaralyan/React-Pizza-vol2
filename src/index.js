import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
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
