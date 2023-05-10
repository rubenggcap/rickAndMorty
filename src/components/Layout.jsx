import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <header>This is a header</header>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
