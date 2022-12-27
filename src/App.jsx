import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalLayout from "./components/GlobalLayout";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<GlobalLayout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
      </Route>
    </Routes>
  );
}

export default App;
