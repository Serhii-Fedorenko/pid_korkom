import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ component, redirectTo = "/build" }) => {
  const {isLoggedIn, isRefreshing} = useAuth()

  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
