import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="m-2">
      <ul className="flex flex-row justify-center">
        <li>
          <Link
            className={clsx({
              "mx-2 bg-slate-400 p-2": location.pathname.includes("characters"),
              "mx-2 bg-slate-200 p-2":
                !location.pathname.includes("characters"),
            })}
            to="characters"
          >
            Characters
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "mx-2 bg-slate-400 p-2": location.pathname.includes("episodes"),
              "mx-2 bg-slate-200 p-2": !location.pathname.includes("episodes"),
            })}
            to="episodes"
          >
            Episodes
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "mx-2 bg-slate-400 p-2": location.pathname.includes("locations"),
              "mx-2 bg-slate-200 p-2": !location.pathname.includes("locations"),
            })}
            to="locations"
          >
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
