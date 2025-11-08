import { Route, Routes } from "react-router-dom";
import Inicio from "./screens/Inicio";
import Calendario from "./screens/Calendario";
import Guia from "./screens/Guia";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/guia" element={<Guia />} />
      <Route path="/calendario" element={<Calendario />} />
    </Routes>
  );
}

export default App;
