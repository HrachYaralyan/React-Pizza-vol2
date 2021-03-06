import React from 'react';
import ReactPaginate from 'react-paginate';
import style from "./paginatoin.module.scss"

function Pagenation({onCahnegePage}) {

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
      
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagenation;