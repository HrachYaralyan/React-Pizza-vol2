import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagenation from '../components/Pagenation';
import { SearchContext } from '../App';


  const Home = () => {
  let [items ,setItems] = React.useState([]);
  let [isLoading ,setIsLoading] = React.useState(true);
  let [categoryID , setCategoryID] = React.useState(0);
  let [sortType , setSortType] = React.useState({name : "популярности" , sortProperty : "rating"});
  let [currentPage ,setCurentPage] = React.useState(1);

  let {searchValue} = React.useContext(SearchContext)

  React.useEffect(()=>{
    setIsLoading(true);

    let category = categoryID > 0 ? `category=${categoryID}` : "";
    let order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    let sortBy = sortType.sortProperty.replace("-","");
    let search = searchValue  ? `&search=${searchValue}` : "";

  
    fetch(`https://629616eb75c34f1f3b28e361.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}` )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0 ,0 )
  },[categoryID ,sortType ,searchValue ,currentPage])

  const skeleton =  [...new Array(6)].map((_, index )=> <Skeleton key={index} />) 
  const pizzas = items.map((obj , index)=>(<PizzaBlock key={`${obj}_${index}`} {...obj} />))

  // const pizzas = items.filter((obj)=>{
  //   if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
  //     return true
  //   } Searching փոքր տվյալների վրա ստստիկ array - ի վրա առանաց back end -ի 
  //   return false;
  // }).map((obj , index)=>(<PizzaBlock key={`${obj}_${index}`} {...obj} />))



  
  return (
      <>
        <div className="content__top">
            <Categories value={categoryID} onChangeCategory={(index)=> setCategoryID(index)}/>
            <Sort value={sortType} onChangeSort={(index)=> setSortType(index)} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {
              isLoading ? skeleton : pizzas
            }
    
          </div>
          <Pagenation  onCahnegePage={(number)=>setCurentPage(number)}/>
        
      </>
  )
}

export default Home;