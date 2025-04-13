import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Forms/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Articles from "./Pages/Articles";
import Dashboard from "./Pages/Dashboard";
import { refreshUser } from "./redux/auth/operations";
import ArticlePage from "./Pages/ArticlePage";
import WhiskyPage from "./Pages/WhiskyPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Articles />}></Route>
        <Route path="articles/category/whisky" element={<WhiskyPage />}></Route>
        <Route path="articles/:id" element={<ArticlePage />}></Route>
        <Route
          path="admin"
          element={<PrivateRoute component={<Dashboard />} redirectTo="/" />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
