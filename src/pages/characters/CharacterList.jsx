import { useEffect, useState } from "react";
import Paginator from "../../components/Paginator";
import useFetch from "../../hooks/useFetch";

function CharacterList() {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [url, setUrl] = useState(baseUrl);
  const [characters, setCharacters] = useState([]);
  const [maxPageNumber, setMaxPageNumber] = useState();
  const { data, error, loading, refetch } = useFetch(url);

  useEffect(() => {
    if (!data) return;
    setMaxPageNumber(data.pages);
    setCharacters(data.results);
  }, [data]);

  function handlePageChange(newPage) {
    refetch(`${baseUrl}?page=${newPage}`);
  }

  if (error) {
    return <>Something went wrong {err}</>;
  }

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      {characters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
      <Paginator
        maxPageNumber={maxPageNumber}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default CharacterList;
