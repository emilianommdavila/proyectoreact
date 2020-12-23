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
    console.log(artista);
    setArtista(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="centrado">
        <div className="home">
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
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default PageHome;
