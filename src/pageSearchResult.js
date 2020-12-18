import "./App.css";
import React, { useState } from "react";
import BarraDeBusqueda from "./components/barraDeBusqueda.js";
import "bootstrap/dist/css/bootstrap.css";
import SearchResult from "./components/SearchResult";
function PageSearchResult() {
  const [padre, setPadre] = useState("");
  const changeHandle = (e) => {
    setPadre(e.target.name);
    console.log(padre);
  };
  return (
    <React.Fragment>
      <BarraDeBusqueda onChange={changeHandle} />
      <SearchResult />
    </React.Fragment>
  );
}

export default PageSearchResult;
