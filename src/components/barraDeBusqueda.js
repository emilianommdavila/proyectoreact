import React, { useState } from "react";
import "./barraDeBusqueda.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

function BarraDeBusqueda(props) {
  const [busqueda, setBusqueda] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name);
  // };
  // const handleChange = (e) => {
  //   setBusqueda(e.target.value);
  //   console.log(busqueda);
  // };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2">
          <Link to="/">
            <img src={Logo} className="logo-barra" alt="" />
          </Link>
        </div>
        <div className="col-md-4">
          <form
            className="form-inline"
            // onSubmit={handleSubmit}
            name="meLlamoFormulario"
          >
            <div className="busqueda">
              <input
                name="busqueda"
                type="text"
                // value={props.busqueda}
                placeholder="Busca tu Música"
                onChange={props.onChange}
              />
            </div>
            <button className="btng" type="submit">
              Search Similar Artist
            </button>
          </form>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default BarraDeBusqueda;
