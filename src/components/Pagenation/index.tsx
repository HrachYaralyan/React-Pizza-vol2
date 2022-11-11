import React from 'react';
import ReactPaginate from 'react-paginate';
import style from "./paginatoin.module.scss"

type IPagenation ={
  currentPage:number;
  onCahnegePage:(page:number)=>void;
}

const Pagenation:React.FC<IPagenation> = ({ currentPage, onCahnegePage})=>{
// function Pagenation({ currentPage, onCahnegePage}) {

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <>
      <ReactPaginate
      className={style.root}
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        onPageChange={(e)=> onCahnegePage(e.selected + 1 )}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        // renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagenation;