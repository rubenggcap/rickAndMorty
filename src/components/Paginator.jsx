import { useEffect } from "react";
import { useState } from "react";

function Paginator({ maxPageNumber, onPageChange }) {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    onPageChange(pageNumber);
  }, [pageNumber]);

  function nextPage() {
    if (pageNumber == maxPageNumber) return;
    setPageNumber((pageNumber) => pageNumber + 1);
  }

  function previousPage() {
    if (pageNumber === 1) return;
    setPageNumber((pageNumber) => pageNumber - 1);
  }

  return (
    <div className="flex justify-center bg-slate-200 m-4 p-4">
      <button
        onClick={previousPage}
        className="w-24 mx-2 p-2 border-2 border-black"
      >
        Previous
      </button>
      {pageNumber}
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
