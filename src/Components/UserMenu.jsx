import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/operations";

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Вітаю {user.name}</p>
      <button onClick={() => dispatch(logout())}>Вийти</button>
    </div>
  );
};

export default UserMenu;
