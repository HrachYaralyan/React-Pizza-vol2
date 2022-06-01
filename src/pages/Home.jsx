import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from "../components/PizzaBlock/Skeleton";

  const Home = () => {
  let [items ,setItems] = React.useState([]);
  let [isLoading ,setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    fetch('https://629616eb75c34f1f3b28e361.mockapi.io/items')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0 ,0 )
  },[])
  return (
      <>
        <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {
              isLoading ? [...new Array(6)].map((_, index )=> <Skeleton key={index} />) 
                        : items.map((obj , index)=>(
                            <PizzaBlock key={`${obj}_${index}`}
                                        // title={obj.title}
                                        // price={obj.price}
                                        // imageUrl={obj.imageUrl}
                                        // sizes={obj.sizes}
                                        // types={obj.types}
                                        {...obj}
                            
                            />
                          ))
            }
           
          </div>
      </>
  )
}

export default Home;