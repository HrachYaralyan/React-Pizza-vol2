import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPiazza from './pages/FullPiazza';
import MainLayout from './Layout/MainLayout';



// export const SearchContext = React.createContext()

function App() {
 

  // let [searchValue , setSearchValue] = React.useState("");
  




  return (
    // <div className="wrapper">
 
 
    // <Header   />
    //   <div className="content">
    //     <div className="container">

            <Routes>
              <Route path="/" element={<MainLayout />}>
              <Route path='' element={<Home  /> } />
              <Route path='Cart' element={<Cart /> } />
              <Route path='pizza/:id' element={<FullPiazza/>} />
              <Route path='*' element={<NotFound/> } />
              </Route>
            </Routes>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;



// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment ,random ,incrementByAmount } from './redux/slices/filterSlice'
// const count = useSelector((state) => state.counter.value)
// const countRand = useSelector((state) => state.counter.rendNum)
// const dispatch = useDispatch()
{/* <button

aria-label="Increment value"
onClick={() => dispatch(increment())}
>
Increment
</button>
<br></br>
<span>{count} </span> number
<br></br>
<span>{countRand} </span> rand
<br></br>
<span>{countRand + count} </span> rand + numb
<br></br>
<button
aria-label="Decrement value"
onClick={() => dispatch(decrement())}
>
Decrement
</button>
<br></br>
<button
aria-label="Decrement value"
onClick={() => dispatch(random())}
>
rand
</button>
<br></br>
<button
aria-label="Decrement value"
onClick={() => dispatch(incrementByAmount(100))}
>
incrementByAmount
</button> */}