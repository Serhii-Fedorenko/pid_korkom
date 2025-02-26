import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Articles from "./Pages/Articles";
import Home from "./Pages/Home";

function App() {
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
