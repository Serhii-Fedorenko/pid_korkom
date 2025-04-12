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
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 text-white flex flex-wrap items-center justify-between p-4">
        <div className="flex flex-wrap gap-4 text-sm sm:text-base">
          <NavLink to="/" className="hover:underline">
            Головна
          </NavLink>
          <NavLink to="/articles" className="hover:underline">
            Дописи
          </NavLink>
          {isAdmin && (
            <NavLink to="/admin" className="hover:underline">
              Dashboard
            </NavLink>
          )}
        </div>
        <div className="mt-2 sm:mt-0">
          {!isLoggedIn && (
            <button
              onClick={() => dispatch(toggleModal())}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Увійти
            </button>
          )}
          {isLoggedIn && <UserMenu user={user} />}
        </div>
      </nav>
      {isModalOpen && (
        <Modal>
          {isRegistered && <Login />}
          {!isRegistered && <Register />}
        </Modal>
      )}
      <main className="flex-grow p-4 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
