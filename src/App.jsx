import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Forms/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Articles from "./Pages/Articles";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="articles" element={<Articles />}></Route>
        <Route
          path="admin"
          element={
            <PrivateRoute component={<Dashboard />} redirectTo="/login" />
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
