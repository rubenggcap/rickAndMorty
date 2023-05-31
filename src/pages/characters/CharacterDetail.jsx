import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getItemId } from "../../utils/getItemId";
import { Link } from "react-router-dom";

function CharacterDetail() {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  let params = useParams();
  const { data, error, loading } = useFetch(baseUrl + "/" + params.id);

  if (loading) {
    return <>Loading character</>;
  }

  if (error) {
    return <>Error loading character</>;
  }

  return (
    <div>
      Detail
      <p>{data.name}</p>
      <img src={data.image} className="h-full w-52 object-cover"></img>
      <p>Origin: </p>
      <Link
        to={`/locations/${getItemId(data.location.url)}`}
        className="underline"
      >
        {data?.origin.name}
      </Link>
    </div>
  );
}

export default CharacterDetail;
