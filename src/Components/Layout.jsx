import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/articles'>Articles</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
