import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Rutine from "./pages/Rutine";
import Students from "./pages/Students";
import Nutrition from "./pages/Nutrition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/rutine" element={<Rutine />} />
      <Route path="/nutrition" element={<Nutrition />} />
    </Routes>
  );
}

export default App;
