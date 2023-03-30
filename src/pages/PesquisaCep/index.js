import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import apiCidade from "./../../services/apiCidade";
import apiCep from "./../../services/apiCep";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function PesquisaCep() {
  const [globalFilter1, setGlobalFilter1] = useState("");
  const [inputCep, setInputCep] = useState("");
  const [cep, setCep] = useState({});
  const [cidades, setCidades] = useState([]);

  async function handlePesquisar() {
    if (inputCep === "") {
      setCidades([]);
      setCep({});
    }

    const response = await apiCep.get(`${inputCep}/json`);
    setCep(response.data);
    carregarCidade();
  }

  async function carregarCidade() {
    const response = await apiCidade.get(`${cep.localidade},${cep.uf}`);
    setCidades(response.data.results.forecast);
  }

  const listaStatusTableHeader = (
    <div className="table-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={globalFilter1}
          onChange={(e) => setGlobalFilter1(e.target.value)}
          placeholder="Clima / Temperatura"
        />
      </span>
    </div>
  );

  return (
    <div className="p-grid">
      <h1>
        Previsão do tempo por Cidade(CEP) - {cep.localidade},{cep.uf}
      </h1>
      <div className="p-col-12">
        <InputMask
          value={inputCep}
          onBlur={handlePesquisar}
          onChange={(e) => setInputCep(e.target.value)}
          mask="99999-999"
          placeholder="Digite seu cep..."
          maxLength={9}
        />
        <div className="card">
          <DataTable
            value={cidades}
            emptyMessage="Lista Vazia."
            globalFilter={globalFilter1}
            header={listaStatusTableHeader}
          >
            <Column field="min" header="MIN Cº" sortable></Column>
            <Column field="max" header="MAX Cº" sortable></Column>
            <Column field="description" header="Descrição" sortable></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default PesquisaCep;
