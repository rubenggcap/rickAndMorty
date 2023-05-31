import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

function Layout() {
  return (
    <div className="h-full flex flex-col">
      <header>
        <Link to="/characters">
          <img className="mx-auto" src={logo}></img>
        </Link>
      </header>
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
