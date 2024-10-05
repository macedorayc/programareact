import { BrowserRouter, Routes, Route } from "react-router-dom";
import Canal from "./pages/canal";
import Consultar from "./pages/buscar";
import Alterar from "./pages/alterar";
import Excluir from "./pages/deletar";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Canal />} />
        <Route path="/buscar" element={<Consultar />} />
        <Route path="/alterar" element={<Alterar/>} />
        <Route path="/excluir" element={<Excluir />} />
       
      </Routes>
    </BrowserRouter>
  );
}