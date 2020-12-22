import "./App.css";
import React, { useState, useEffect } from "react";
import BarraDeBusqueda from "./components/barraDeBusqueda.js";
import "bootstrap/dist/css/bootstrap.css";
import SearchResult from "./components/SearchResult";

function PageSearchResult(props) {
  const [busqueda, setBusqueda] = useState("");

  const changeHandle = (e) => {
    setBusqueda(e);
  };
  useEffect(() => {
    let search = props.history.location.search.substr(1).replace("%20", " ");

    setBusqueda(search);
  }, [busqueda]);
  return (
    <React.Fragment>
      <BarraDeBusqueda onChange={changeHandle} busqueda={busqueda} />
      <SearchResult busqueda={busqueda} />
    </React.Fragment>
  );
}

export default PageSearchResult;
