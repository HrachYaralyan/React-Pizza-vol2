import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';


export const SearchContext = React.createContext()

function App() {


  let [searchValue , setSearchValue] = React.useState("");
 

  console.log(searchValue, " youuu");
  return (
    <div className="wrapper">
    <SearchContext.Provider value={{searchValue, setSearchValue}}>
    <Header   />
      <div className="content">
        <div className="container">
            <Routes>
              <Route path='/' element={<Home  /> } />
              <Route path='/Cart' element={<Cart /> } />
              <Route path='*' element={<NotFound/> } />
            </Routes>
        </div>
      </div>
    </SearchContext.Provider>
    </div>
  );
}

export default App;
