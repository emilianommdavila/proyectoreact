import React, { useState } from "react";
import "./barraDeBusqueda.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

function BarraDeBusqueda(props) {
  const [valorBusqueda, setValorBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valorBusqueda);
    props.onChange(valorBusqueda);
  };
  // const handleChange = (e) => {
  //   setBusqueda(e.target.value);
  //   console.log(busqueda);
  // };
  const cambiarValor = (e) => {
    setValorBusqueda(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="barraDeBusqueda">
        <div className="col-md-2 col-sm-12">
          <Link to="/">
            <img src={Logo} className="logo-barra" alt="" />
          </Link>
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
                // value={props.busqueda}
                placeholder="Busca tu Música"
                onChange={cambiarValor}
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
