import { Outlet } from "react-router-dom";

function Layout() {
  <>
    <header>This is a header</header>
    <Outlet />
  </>;
}

export default Layout;
