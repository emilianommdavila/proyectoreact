import React, { useState } from "react";
import "./barraDeBusqueda.css";
import Logo from "../logo.svg";

function BarraDeBusqueda(props) {
  // Estados
  // const [busqueda, setBusqueda] = useState("");
  // Funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  // const handleChange = (e) => {
  //   setBusqueda(e.target.value);
  //   console.log(busqueda);
  // };
  // Retorno
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2">
          <img src={Logo} className="logo-barra" alt="" />
        </div>
        <div className="col-md-4">
          <form
            className="form-inline"
            onSubmit={handleSubmit}
            name="meLlamoFormulario"
          >
            <div className="busqueda">
              <input
                name="busqueda"
                type="text"
                value={props.busqueda}
                placeholder="Busca tu Música"
                onChange={props.onChange}
              />
            </div>
          </form>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default BarraDeBusqueda;
