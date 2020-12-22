import React, { useState } from "react";
import "./page-home.css";
import Logo from "./logo.svg";
function PageHome(props) {
  const [artista, setArtista] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/busqueda?" + artista);
  };
  const onChange = (e) => {
    setArtista(e.target.value);
    console.log(artista);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img id="logo" src={Logo} className="logo-barra" alt="" />
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
                  onChange={onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng">EscuelaDevRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default PageHome;
