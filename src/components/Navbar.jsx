import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="m-2">
      <ul className="flex flex-row justify-center">
        <li>
          <Link className="mx-2 bg-slate-200 p-2" to="characters">
            Characters
          </Link>
        </li>
        <li>
          <Link className="mx-2 bg-slate-200 p-2" to="episodes">
            Episodes
          </Link>
        </li>
        <li>
          <Link className="mx-2 bg-slate-200 p-2" to="locations">
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
