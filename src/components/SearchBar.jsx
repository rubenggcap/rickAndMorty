import { useRef } from "react";

function SearchBar({ placeholder, onSearch }) {
  const inputRef = useRef(null);

  function handleSearch() {
    onSearch(inputRef.current.value);
  }

  return (
    <div className="flex h-12 justify-center">
      <input className="border px-2" ref={inputRef} placeholder={placeholder} />
      <button className="border px-2 bg-slate-200" onClick={handleSearch}>
        search
      </button>
    </div>
  );
}

export default SearchBar;
