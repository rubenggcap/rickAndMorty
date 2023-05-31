import { Link } from "react-router-dom";
import { getItemId } from "../../utils/getItemId";

function CharacterCard({ character }) {
  console.log(character);
  return (
    <div className="my-4 flex bg-slate-200 rounded-md w-[600px] h-52">
      <img src={character.image} className="h-full w-52 object-cover"></img>
      <div className="ml-4">
        <Link to={`/characters/${character.id}`}>{character.name}</Link>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.type}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        <Link
          className="underline"
          to={`/locations/${getItemId(character.location.url)}`}
        >
          {character.location.name}
        </Link>
        <div className="h-12 w-48 flex flex-wrap overflow-scroll">
          {character.episode.map((episode) => (
            <Link to={`/episodes/${getItemId(episode)}`}>
              Episode: {getItemId(episode)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
