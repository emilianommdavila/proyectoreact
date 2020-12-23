import "../App.css";
import "./artist.css";
import React, { useState, useEffect } from "react";
import BarraDeBusqueda from "./barraDeBusqueda.js";
import "bootstrap/dist/css/bootstrap.css";
import SimilarArtist from "./similarArtist";
import ArtistCard from "./artistCard.js";

function ArtistPage(props) {
  const [busqueda, setBusqueda] = useState("");

  const changeHandle = (e) => {
    setBusqueda(e.target.value);
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [datos, setDatos] = useState(
    {
      artist: {
        name: "",
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "hola",
        },
        similar: { artist: [] },
      },
    },

    []
  );

  const fetchData = async (data) => {
    fetch(data).then((res) => {
      if (data.error) {
        console.log("error en la solicitud");
        setError(true);
      } else {
        res
          .json()
          .then((datosSimilares) => setDatos(datosSimilares))
          .then(setLoading(false));
      }
    });
  };
  useEffect(() => {
    let propiedades = props.history.location.search.substr(1);
    if (propiedades === "") {
      propiedades = "undefined";
    }
    fetchData(
      // ` http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=cher&api_key=d693fd9cd9996bb3a0e22ff64779ae5d&format=json`
      ` https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${propiedades}&api_key=d693fd9cd9996bb3a0e22ff64779ae5d&format=json`
    );
  }, [props]);
  console.log(datos);

  let descripcion = datos.artist.bio.summary
    .replace("<a", "'<a")
    .replace(">", ">'");
  console.log(descripcion);

  return (
    <React.Fragment>
      <BarraDeBusqueda onChange={changeHandle} busqueda={busqueda} />
      <div className="container ">
        <div className="row centrar ">
          <div className="mostrarArtista ">
            <img
              className="imagenArtista top50"
              src={datos.artist.image[3]["#text"]}
            />
            <h2 className="centrarTexto">{datos.artist.name}</h2>
            <p className="descripcionArtista centrarTexto">{descripcion}</p>
          </div>
          <hr />
          <div className="mostrarArtista centrar">
            <SimilarArtist prop={datos.artist.similar.artist} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ArtistPage;
