import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
