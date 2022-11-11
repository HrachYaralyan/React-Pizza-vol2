import React from 'react'

import style from './NodeFoundBlock.module.scss'



 const NotFoundBlock:React.FC= ()=>{
  return (

    <div className={style.root}>
    <h1>404 </h1>
    <h1>Page is Node Found</h1>
    </div>
   
  )
}

export default NotFoundBlock;
