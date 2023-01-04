import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalLayout from "./components/GlobalLayout";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<GlobalLayout/>}>
        <Route index element={<Home />} />
        <Route path="selectplan" element={<SelectPlan/>} />
        <Route path="addons" element={<AddOns/>} />
        <Route path="summary" element={<Summary/>} />
      </Route>
    </Routes>
  );
}

export default App;
