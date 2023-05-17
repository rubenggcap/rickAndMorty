import { useEffect, useState } from "react";

function Paginator({ maxPageNumber, currentPage, onPageChange }) {
  function nextPage() {
    if (currentPage == maxPageNumber) return;
    onPageChange(currentPage + 1);
  }

  function previousPage() {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  }

  return (
    <div className="flex justify-center bg-slate-200 m-4 p-4">
      <button
        onClick={previousPage}
        className="w-24 mx-2 p-2 border-2 border-black"
      >
        Previous
      </button>
      {currentPage}
      <button
        onClick={nextPage}
        className="w-24 mx-2 p-2 border-2  border-black"
      >
        Next
      </button>
    </div>
  );
}

export default Paginator;
