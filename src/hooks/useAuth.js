import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegistered,
  selectUser,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isRegistered = useSelector(selectIsRegistered);

  return { user, isLoggedIn, isRefreshing, isRegistered };
};
