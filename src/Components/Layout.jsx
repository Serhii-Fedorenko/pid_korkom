import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { selectIsModalOpen } from "../redux/modal/selectors";
import { toggleModal } from "../redux/modal/slice";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import Modal from "./Modal/Modal";
import UserMenu from "./UserMenu";

const Layout = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const { user, isLoggedIn, isRegistered } = useAuth();
  const isAdmin = useSelector((state) => state.auth.user?.role) === "admin";

  return (
    <div>
      <nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/articles">Дописи</NavLink>
        {isAdmin && <NavLink to="/admin">Dashboard</NavLink>}
        {!isLoggedIn && (
          <button onClick={() => dispatch(toggleModal())}>Увійти</button>
        )}
        {isLoggedIn && <UserMenu user={user} />}
      </nav>
      {isModalOpen && (
        <Modal>
          {isRegistered && <Login />}
          {!isRegistered && <Register />}
        </Modal>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
