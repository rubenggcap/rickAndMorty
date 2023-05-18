import { useEffect, useState } from "react";
import Paginator from "../../components/Paginator";
import SearchBar from "../../components/SearchBar";
import useFetch from "../../hooks/useFetch";
import CharacterCard from "./CharacterCard";
import { addProperties } from "../../utils/addObjectProperties";
import { generateParamString } from "../../utils/generateParamString";

function CharacterList() {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [url, setUrl] = useState(baseUrl);
  const [characters, setCharacters] = useState([]);
  const [maxPageNumber, setMaxPageNumber] = useState();
  const { data, error, loading } = useFetch(url);
  const [filters, setFilters] = useState({
    name: "",
    page: 1,
  });

  useEffect(() => {
    if (!data) return;
    setMaxPageNumber(data.info.pages);
    setCharacters(data.results);
  }, [data]);

  function handlePageChange(newPage) {
    const newFilters = addProperties(filters, { page: newPage });
    setFilters(newFilters);
    setUrl(generateParamString(baseUrl, newFilters));
  }

  function search(value) {
    const newFilters = addProperties(filters, { name: value });
    setFilters(newFilters);
    setUrl(generateParamString(baseUrl, newFilters));
  }

  return (
    <>
      <div className="h-full flex flex-col">
        <SearchBar onSearch={search} placeholder="Search characters" />
        {error && <>Something went wrong {err}</>}
        {loading && <>Loading...</>}
        {!error && !loading && (
          <div className="grow flex flex-col items-center">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
        <Paginator
          maxPageNumber={maxPageNumber}
          onPageChange={handlePageChange}
          currentPage={filters.page}
        />
      </div>
    </>
  );
}

export default CharacterList;
