import React from "react";

let categoriesArr = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"]


function Categories({value , onChangeCategory}) {




  return(
    <div className="categories">
    <ul>
      {
        categoriesArr.map((categoryName, index)=>{
          return(
            <li onClick={()=> onChangeCategory(index)}
                className={index == value ? "active" : ""}
                key={`${categoryName}_${index}`}
                >{categoryName}</li>
          )
        })
      }
    </ul>
  </div>
  )
}

export default Categories;


