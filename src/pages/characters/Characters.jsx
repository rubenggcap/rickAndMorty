import { Outlet, Link } from "react-router-dom";

function Characters() {
  return (
    <>
      <h1>Characters</h1>
      <Outlet />
    </>
  );
}

export default Characters;
