import { useEffect, useState } from "react";
import Paginator from "../../components/Paginator";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    retrieveCharacters();
  }, []);

  async function retrieveCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const jsonResponse = await response.json();
    setCharacters(jsonResponse.results);
  }

  return (
    <>
      {characters.map((character) => (
        <div>{character.name}</div>
      ))}
      <Paginator maxPageNumber="5" />
    </>
  );
}

export default CharacterList;
