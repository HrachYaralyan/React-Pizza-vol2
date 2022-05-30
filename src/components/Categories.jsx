import React from "react";

let categoriesArr = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"]


function Categories() {
  let [activeItndex ,setActiveItndex] = React.useState(0)

  

  return(
    <div className="categories">
    <ul>
      {
        categoriesArr.map((item, index)=>{
          return(
            <li onClick={()=> setActiveItndex(index)}
                className={index == activeItndex ? "active" : ""}
                key={`${item}_${index}`}
                >{item}</li>
          )
        })
      }
    </ul>
  </div>
  )
}

export default Categories;


