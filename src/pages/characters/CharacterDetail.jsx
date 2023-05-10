import { useParams } from "react-router-dom";

function CharacterDetail() {
  let params = useParams();
  console.log(params);
  return <>Detail</>;
}

export default CharacterDetail;
