import React from 'react';
// import { SearchContext } from '../../App';
import debounce from "lodash.debounce";
import {setSearchValue} from "../../redux/slices/filterSlice"
import {  useDispatch } from 'react-redux';

import style from "./search.module.scss";

export default function Search(){
  let dispatch = useDispatch();
  // let {setSearchValue} = React.useContext(SearchContext);
  const [value , setValue] = React.useState("");
  const inputRef = React.useRef();

  const onclickClear=()=>{
    setValue("");
    // setSearchValue("");
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  }

  const updateSerachValue = React.useCallback(
    debounce((str)=>{
      // setSearchValue(str)
      dispatch(setSearchValue(str))
    },300),[])//debounce - դա առանձին pacage -է որը նաման է setTimeOut-ին այսինքն հետաձգված function - ի կանչ է 
    // այստեղ մենք ունենք 2 state : 1 - ը visual տեքստը ցույցտալու համար է մյուսը իրական գործողության state -ին փոխանցելու համար 

    const onChangeInput=(event)=>{
      setValue(event.target.value);
      updateSerachValue(event.target.value)
    }

  return (
    <div className={style.root }>
    <svg className={style.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><title/><g data-name="Layer 3" id="Layer_3"><path className="cls-1" d="M11,22A10,10,0,1,1,21,12,10,10,0,0,1,11,22ZM11,4a8,8,0,1,0,8,8A8,8,0,0,0,11,4Z"/><path className="cls-1" d="M28,29.74a3,3,0,0,1-1.93-.7L19.94,23.9a3,3,0,0,1,3.86-4.6l6.13,5.14A3,3,0,0,1,28,29.74ZM21.87,20.6h-.09a1,1,0,0,0-.55,1.77l6.13,5.14a1,1,0,0,0,1.41-.12,1,1,0,0,0,.23-.73,1,1,0,0,0-.36-.68l-6.13-5.15A1,1,0,0,0,21.87,20.6Z"/><path className="cls-1" d="M20,21a1,1,0,0,1-.64-.23L17,18.82a1,1,0,0,1,1.28-1.54l2.34,1.95a1,1,0,0,1,.13,1.41A1,1,0,0,1,20,21Z"/></g></svg>
     <input ref={inputRef} onChange={(e)=> onChangeInput(e) } value={value} className={style.input} type="text" placeholder='Search pizza..' />
     {
       value && <svg onClick={onclickClear}  className={style.clear} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/><path d="M0 0h48v48H0z" fill="none"/></svg>        
     }
    
    </div>
   
  )
}
