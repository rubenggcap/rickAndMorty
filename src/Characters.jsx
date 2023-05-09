import { Link } from "react-router-dom";

function Characters() {
  return (
    <>
      This is the characters page <Link to="/episodes">Episodes</Link>
    </>
  );
}

export default Characters;
