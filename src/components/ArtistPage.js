import "../App.css";
import React, { useState } from "react";
import BarraDeBusqueda from "./barraDeBusqueda.js";
import "bootstrap/dist/css/bootstrap.css";
import SimilarArtist from "./similarArtist";

function ArtistPage() {
  const [busqueda, setBusqueda] = useState("");

  const changeHandle = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <React.Fragment>
      <BarraDeBusqueda onChange={changeHandle} busqueda={busqueda} />
      <div className="container ">
        <div className="row centrar ">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <img
              className="imagenArtista top50"
              src="https://cucharasonica.com/files/2013/05/Gustavo_Cerati-Bocanada-Frontal-600x600.jpg"
            />
            <h2 className="centrarTexto">Gustavo Cerati</h2>
            <p className="centrarTexto">
              Gustavo Adrián Cerati ​​​ fue un músico, cantautor, compositor y
              productor discográfico argentino que obtuvo reconocimiento
              internacional por haber sido el líder de la banda de rock Soda
              Stereo.
            </p>
          </div>
          <div className="row centrar">
            <SimilarArtist />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ArtistPage;
