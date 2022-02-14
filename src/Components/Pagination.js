import React, { useState, useEffect } from "react";

function Pagination({ page, previousPage, nextPage }) {
  // const [page, setPage] = React.useState(1);
  // function nextPage() {
  //   setPage(page + 1);
  // }
  // function previousPage() {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // }

  return (
    <>
      <div className="flex justify-center mb-8 mt-5">
        <button
          className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl"
          onClick={previousPage}
        >
          Previous
        </button>
        <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-200">
          {page}
        </button>
        <button
          className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
