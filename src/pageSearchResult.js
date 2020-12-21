import "./App.css";
import React, { useState, useEffect } from "react";
import BarraDeBusqueda from "./components/barraDeBusqueda.js";
import "bootstrap/dist/css/bootstrap.css";
import SearchResult from "./components/SearchResult";

function PageSearchResult() {
  const [busqueda, setBusqueda] = useState("");

  const changeHandle = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <React.Fragment>
      <BarraDeBusqueda onChange={changeHandle} busqueda={busqueda} />
      <SearchResult busqueda={busqueda} />
    </React.Fragment>
  );
}

export default PageSearchResult;
