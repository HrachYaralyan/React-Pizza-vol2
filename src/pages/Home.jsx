import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from "../components/PizzaBlock/Skeleton";

  const Home = () => {
  let [items ,setItems] = React.useState([]);
  let [isLoading ,setIsLoading] = React.useState(true);
  let [categoryID , setCategoryID] = React.useState(0);
  let [sortType , setSortType] = React.useState({name : "популярности" , sortProperty : "rating"});

  React.useEffect(()=>{
    setIsLoading(true);

    let category = categoryID > 0 ? `category=${categoryID}` : ""
    let order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    let sortBy = sortType.sortProperty.replace("-","");

    fetch(`https://629616eb75c34f1f3b28e361.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}` )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0 ,0 )
  },[categoryID ,sortType])

  console.log(categoryID ,sortType.sortProperty );
  return (
      <>
        <div className="content__top">
            <Categories value={categoryID} onChangeCategory={(index)=> setCategoryID(index)}/>
            <Sort value={sortType} onChangeSort={(index)=> setSortType(index)} />
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