import React from "react";
import {useSelector , useDispatch} from  "react-redux";
import {selectSort, setSortType} from "../redux/slices/filterSlice";


type ListItem = {
  name : string ;
  sortProperty : string;
};
type PopupClick = MouseEvent & {
  path: Node[];
};


export const list :ListItem[] = [{name : "популярности (DESC)", sortProperty : "rating"},
              {name : "популярности (ASC -)" , sortProperty : "-rating"},
              {name : "цене (DESC) 10..1" , sortProperty : "price"},
              {name : "цене (ASC) 1..10" , sortProperty : "-price"},
              {name : "алфавиту (DESC) A-Z" , sortProperty : "title"},
              {name : "алфавиту (ASC) Z-A", sortProperty : "-title"},
              ];

function Sort() {
  const dispatch = useDispatch();

  
  let sort = useSelector(selectSort);
  // let sort = useSelector((state)=> state.filter.sort);



let [open , setOpen] = React.useState(false);
let sortRef = React.useRef<HTMLDivElement>(null);
 

  function onClickSortItem(obj :ListItem) {
    dispatch(setSortType(obj))
    setOpen(false)
  }

React.useEffect(()=>{
  const handleClikcoutSide = (event: MouseEvent)=>{
    const _event = event as PopupClick;
      // if(!e.path.includes(sortRef.current)){
      //   setOpen(false)
      // }
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
  }
  document.body.addEventListener("click", handleClikcoutSide);

  return ()=>{
    document.body.removeEventListener("click", handleClikcoutSide)
  }
},[])
  return(
    <div className="sort" ref={sortRef}>
              <div className="sort__label">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={()=> setOpen(!open)}>{sort.name}</span>
              </div>
              {open && (<div className="sort__popup">
                <ul>
                  {
                    list.map((obj , index)=>(
                      <li key={index}
                          className={ obj.sortProperty === sort.sortProperty ? "active" : ""}
                          onClick={()=> onClickSortItem(obj)}
                          >{obj.name}</li>
                    ))
                  }
                </ul>
              </div>)}
            </div>
  )
}

export default Sort;