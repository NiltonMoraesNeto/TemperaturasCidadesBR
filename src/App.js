import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ListagemCidades from "./pages/ListagemCidades";
import PesquisaCep from "./pages/PesquisaCep";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menubar } from "primereact/menubar";

function App() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-power-off",
      url: "/",
    },
    {
      label: "Listagem de Cidades",
      icon: "pi pi-fw pi-power-off",
      url: "/pages/ListagemCidades",
    },
    {
      label: "Pesquisa de Cidades",
      icon: "pi pi-fw pi-power-off",
      url: "/pages/PesquisaCep",
    },
  ];
  return (
    <Router>
      <div className="card">
        <Menubar model={items} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route
          exact
          path="/pages/ListagemCidades"
          element={<ListagemCidades />}
        ></Route>
        <Route
          exact
          path="/pages/PesquisaCep"
          element={<PesquisaCep />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
