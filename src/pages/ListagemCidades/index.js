import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import apiCidade from "./../../services/apiCidade";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function ListagemCidades() {
  const [globalFilter1, setGlobalFilter1] = useState("");
  const [listaCwb, setListaCwb] = useState([]);
  const [listaCgh, setListaCgh] = useState([]);
  const [listaCnf, setListaCnf] = useState([]);
  const [listaSdu, setListaSdu] = useState([]);
  const [listaBsb, setListaBsb] = useState([]);
  const [listaBel, setListaBel] = useState([]);
  const [listaSsa, setListaSsa] = useState([]);
  const [listaFor, setListaFor] = useState([]);
  const [listaMao, setListaMao] = useState([]);
  const [listaJpa, setListaJpa] = useState([]);
  const [listaTotal, setListaTotal] = useState([]);

  const listaStatusTableHeader = (
    <div className="table-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={globalFilter1}
          onChange={(e) => setGlobalFilter1(e.target.value)}
          placeholder="Cidade / Temperatura"
        />
      </span>
    </div>
  );

  //curitiba
  function loadListStatus(data) {
    const newListStatus = [data].map((cwb) => {
      return {
        temp: cwb.temp,
        date: cwb.date,
        city_name: cwb.city_name,
        min: cwb.forecast[0].min,
        max: cwb.forecast[0].max,
      };
    });
    setListaCwb(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus() {
      const response = await apiCidade.get("Curitiba, PR");
      loadListStatus(response.data.results);
    }
    createListStatus();
  }, []);

  //são paulo
  function loadListStatus2(data) {
    const newListStatus = [data].map((sp) => {
      return {
        temp: sp.temp,
        date: sp.date,
        city_name: sp.city_name,
        min: sp.forecast[0].min,
        max: sp.forecast[0].max,
      };
    });
    setListaCgh(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus2() {
      const response = await apiCidade.get("São Paulo, SP");
      loadListStatus2(response.data.results);
    }
    createListStatus2();
  }, []);

  //BH
  function loadListStatus3(data) {
    const newListStatus = [data].map((cnf) => {
      return {
        temp: cnf.temp,
        date: cnf.date,
        city_name: cnf.city_name,
        min: cnf.forecast[0].min,
        max: cnf.forecast[0].max,
      };
    });
    setListaCnf(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus3() {
      const response = await apiCidade.get("Belo Horizonte, MG");
      loadListStatus3(response.data.results);
    }
    createListStatus3();
  }, []);

  //Rio de Janeiro
  function loadListStatus4(data) {
    const newListStatus = [data].map((sdu) => {
      return {
        temp: sdu.temp,
        date: sdu.date,
        city_name: sdu.city_name,
        min: sdu.forecast[0].min,
        max: sdu.forecast[0].max,
      };
    });
    setListaSdu(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus4() {
      const response = await apiCidade.get("Rio de Janeiro, RJ");
      loadListStatus4(response.data.results);
    }
    createListStatus4();
  }, []);

  //Brasilia
  function loadListStatus5(data) {
    const newListStatus = [data].map((bsb) => {
      return {
        temp: bsb.temp,
        date: bsb.date,
        city_name: bsb.city_name,
        min: bsb.forecast[0].min,
        max: bsb.forecast[0].max,
      };
    });
    setListaBsb(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus5() {
      const response = await apiCidade.get("Brasília, DF");
      loadListStatus5(response.data.results);
    }
    createListStatus5();
  }, []);

  //Belem
  function loadListStatus6(data) {
    const newListStatus = [data].map((bel) => {
      return {
        temp: bel.temp,
        date: bel.date,
        city_name: bel.city_name,
        min: bel.forecast[0].min,
        max: bel.forecast[0].max,
      };
    });
    setListaBel(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus6() {
      const response = await apiCidade.get("Belém, PA");
      loadListStatus6(response.data.results);
    }
    createListStatus6();
  }, []);

  //Salvador
  function loadListStatus7(data) {
    const newListStatus = [data].map((ssa) => {
      return {
        temp: ssa.temp,
        date: ssa.date,
        city_name: ssa.city_name,
        min: ssa.forecast[0].min,
        max: ssa.forecast[0].max,
      };
    });
    setListaSsa(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus7() {
      const response = await apiCidade.get("Salvador, BA");
      loadListStatus7(response.data.results);
    }
    createListStatus7();
  }, []);

  //Fortaleza
  function loadListStatus8(data) {
    const newListStatus = [data].map((fort) => {
      return {
        temp: fort.temp,
        date: fort.date,
        city_name: fort.city_name,
        min: fort.forecast[0].min,
        max: fort.forecast[0].max,
      };
    });
    setListaFor(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus8() {
      const response = await apiCidade.get("Fortaleza, CE");
      loadListStatus8(response.data.results);
    }
    createListStatus8();
  }, []);

  //Manaus
  function loadListStatus9(data) {
    const newListStatus = [data].map((mao) => {
      return {
        temp: mao.temp,
        date: mao.date,
        city_name: mao.city_name,
        min: mao.forecast[0].min,
        max: mao.forecast[0].max,
      };
    });
    setListaMao(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus9() {
      const response = await apiCidade.get("Manaus, AM");
      loadListStatus9(response.data.results);
    }
    createListStatus9();
  }, []);

  //João Pessoa
  function loadListStatus10(data) {
    const newListStatus = [data].map((jpa) => {
      return {
        temp: jpa.temp,
        date: jpa.date,
        city_name: jpa.city_name,
        min: jpa.forecast[0].min,
        max: jpa.forecast[0].max,
      };
    });
    setListaJpa(newListStatus);
  }

  //Consultar dados GET API de Cidades
  useEffect(() => {
    async function createListStatus10() {
      const response = await apiCidade.get("João Pessoa, PB");
      loadListStatus10(response.data.results);
    }
    createListStatus10();
  }, []);

  useEffect(() => {
    var arr3 = listaCwb
      .concat(listaCgh)
      .concat(listaCnf)
      .concat(listaSdu)
      .concat(listaBsb)
      .concat(listaBel)
      .concat(listaSsa)
      .concat(listaFor)
      .concat(listaMao)
      .concat(listaJpa);
    console.log("arr3 - ", arr3);
    setListaTotal(arr3);
  }, [
    listaCwb,
    listaCgh,
    listaCnf,
    listaSdu,
    listaBsb,
    listaBel,
    listaSsa,
    listaFor,
    listaMao,
    listaJpa,
  ]);

  return (
    <div className="p-grid">
      <h1>Previsão do tempo</h1>
      <div className="p-col-12">
        <div className="card">
          <DataTable
            value={listaTotal}
            emptyMessage="Lista Vazia."
            globalFilter={globalFilter1}
            header={listaStatusTableHeader}
          >
            <Column field="min" header="MIN Cº" sortable></Column>
            <Column field="max" header="MAX Cº" sortable></Column>
            <Column field="city_name" header="Cidade" sortable></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default ListagemCidades;
