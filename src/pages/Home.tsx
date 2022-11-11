import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryID, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

// import { SearchContext } from '../App';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagenation from '../components/Pagenation';
import { list } from '../components/Sort';
import {  fetchPizzas, selectPizzaData} from '../redux/slices/pizzaSlice';

const Home:React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  let {items,status} = useSelector(selectPizzaData);

  let { categoryID, sort, currentPage , searchValue } = useSelector(selectFilter);


  const onChangeCategory = (index:number) => {
    dispatch(setCategoryID(index));
  };
  const onCahnegePage = (page:number) => {
    dispatch(setCurrentPage(page));
  };

  // let [items, setItems] = React.useState([]);
  // let [isLoading, setIsLoading] = React.useState(true);
  // let { searchValue } = React.useContext(SearchContext);

// if we changed params  categoryID, sort.sortProperty, currentPage =>>>> then will save this params in url 
  React.useEffect(() => {
    if(isMounted.current){
     const queryString = qs.stringify({
       sortProperty: sort.sortProperty,
       categoryID,
       currentPage,
     });
     navigate(`?${queryString}`);/// <<<<=
    }
    isMounted.current = true; // LOOK in first render tis line will working 
   }, [categoryID, sort.sortProperty, currentPage]);

// if we alredy had a render and changed properties in this part we will get info with url and send redux 
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  let getPizzas = async () => {
    // setIsLoading(true);

    let category = categoryID > 0 ? `category=${categoryID}` : '';
    let order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    let sortBy = sort.sortProperty.replace('-', '');
    let search = searchValue ? `&search=${searchValue}` : '';

    // await axios
    //   .get(
    //     `https://629616eb75c34f1f3b28e361.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    //   )
    //   .then((res) => {
    //     setItems(res.data);
    //     setIsLoading(false);
    //   });



    // try {
      // const {data } = await axios.get(`https://629616eb75c34f1f3b28e361.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
      // dispatch(setItems(data))
     dispatch(
      // @ts-ignore
      fetchPizzas({
      category,
      order,
      sortBy,
      search,
      currentPage,
     }));
    //   setIsLoading(false);
    // } catch (error) {
    //   console.log("reason for Error" , error)
    // } finally{
    //   setIsLoading(false);

    // }


    window.scrollTo(0, 0);
  };



  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false
  }, [categoryID, sort.sortProperty, searchValue, currentPage]);

console.log(items,"before rendering home");

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj :any, index:number) => <Link to={`pizza/${obj.id}`} key={`${obj}_${index}`}> <PizzaBlock  {...obj} /> </Link> );

  // const pizzas = items.filter((obj)=>{
  //   if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
  //     return true
  //   } Searching փոքր տվյալների վրա ստստիկ array - ի վրա առանաց back end -ի
  //   return false;
  // }).map((obj , index)=>(<PizzaBlock key={`${obj}_${index}`} {...obj} />))

  return (
    <>
      <div className="content__top">
        <Categories value={categoryID} onChangeCategory={onChangeCategory} />
        {/* <Sort value={sortType} onChangeSort={(index)=> setSortType(index)} /> */}
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === "error" ? (
        <div className='content__error-info'>
          <h1>Soory i cant to find pizzas </h1>
          <p>please  Refresh page or push  F5 </p>
        </div>) : (<div className="content__items">{status =="loading" ? skeleton : pizzas}</div>)
      }
      
      <Pagenation currentPage={currentPage} onCahnegePage={onCahnegePage} />
    </>
  );
};

export default Home;
