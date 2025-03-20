import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Articles from "./Pages/Articles";
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
      </Route>
    </Routes>
  );
}

export default App;
