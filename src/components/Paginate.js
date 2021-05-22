import React from 'react';
import ReactPaginate from 'react-paginate';

// Pagination main component.
const Pagination = (prop) => {
 // This method call when click on page no and take parameter as selected page object.
 const handlePageClick = (selected) => {
  let startIndex = 0;
  const { getItems } = prop;
  startIndex = selected.selected * 10;
  getItems(startIndex);
 };

 return (
  <>
   <ReactPaginate
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    pageCount={10}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    activeClassName={'active'}
   />
  </>
 );
};

export default Pagination;
