import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="h-full flex flex-col">
      <header>This is a header</header>
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
