import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { toggleModal } from "../redux/modal/slice";
import Modal from "./Modal/Modal";
import Register from "./Register";

const Layout = () => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  return (
    <div>
      <nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/articles">Дописи</NavLink>
        <button onClick={() => dispatch(toggleModal())}>Увійти</button>
      </nav>
      {isModalOpen && (
        <Modal>
          <Register />
        </Modal>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
