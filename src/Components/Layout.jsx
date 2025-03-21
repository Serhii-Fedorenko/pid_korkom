import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../redux/auth/operations";
import { toggleModal } from "../redux/modal/slice";
import Login from "./Login";
import Modal from "./Modal/Modal";
import Register from "./Register";

const Layout = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const isAdmin = useSelector((state) => state.auth.user.role) === "admin";

  return (
    <div>
      <nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/articles">Дописи</NavLink>
        {!isLoggedIn && (
          <button onClick={() => dispatch(toggleModal())}>Увійти</button>
        )}
        {isAdmin && <NavLink to="/admin">Dashboard</NavLink>}
        {isLoggedIn && (
          <>
            <p>Вітаю {user.name}</p>
            <button onClick={() => dispatch(logout())}>Вийти</button>
          </>
        )}
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
