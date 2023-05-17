import { useEffect, useState } from "react";
import Paginator from "../../components/Paginator";
import SearchBar from "../../components/SearchBar";
import useFetch from "../../hooks/useFetch";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [url, setUrl] = useState(baseUrl);
  const [characters, setCharacters] = useState([]);
  const [maxPageNumber, setMaxPageNumber] = useState();
  const { data, error, loading } = useFetch(url);
  const [currentPage, setCurrenPage] = useState(1);

  useEffect(() => {
    if (!data) return;
    setMaxPageNumber(data.pages);
    setCharacters(data.results);
  }, [data]);

  function handlePageChange(newPage) {
    setCurrenPage(newPage);
    setUrl(`${baseUrl}?page=${newPage}`);
  }

  if (error) {
    return <>Something went wrong {err}</>;
  }

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="h-full flex flex-col">
      <SearchBar />
      <div className="grow flex flex-col items-center">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Paginator
        maxPageNumber={maxPageNumber}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CharacterList;
