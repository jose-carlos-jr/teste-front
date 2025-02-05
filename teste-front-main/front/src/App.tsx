import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Home from "./pages/Home";
import Deletar from "./pages/Deletar";
import Listar from "./pages/Listar";
import UserForm from "./components/UserForm";
import Cadastrar from "./pages/Cadastrar";


const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Deletar" element={<Deletar />} />
      </Routes>
      <Routes>
        <Route path="/Listar" element={<Listar />} />
      </Routes>
      <Routes>
        <Route path="/Cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};
 
export default App;