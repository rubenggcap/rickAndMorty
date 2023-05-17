import { useEffect, useRef } from "react";

function SearchBar() {
  const inputRef = useRef(null);

  function search() {
    console.log(inputRef.current.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={search}>search</button>
    </>
  );
}

export default SearchBar;
