import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElem = document.getElementById('root');

if(rootElem){
  const root = ReactDOM.createRoot(rootElem);

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
}



// reportWebVitals();

// install ES7+ React/Redux/React-Native snippets կարճ գրելաձևի համար
// imr === import React from 'react';
// rfc === export default func...

//for me `${}_${}`
