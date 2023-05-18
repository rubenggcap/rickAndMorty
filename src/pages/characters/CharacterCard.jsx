function CharacterCard({ character }) {
  return (
    <div className="my-4 flex bg-slate-200 rounded-md w-[600px] h-52">
      <img src={character.image} className="h-full w-52 object-cover"></img>
      <div className="ml-4">
        <p>{character.name}</p>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.type}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
