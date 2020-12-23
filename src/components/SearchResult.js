import "../App.css";
import React, { useState, useEffect } from "react";
import ArtistCard from "./artistCard.js";
import "bootstrap/dist/css/bootstrap.css";
import Loading from "./loading";
function SearchResult(props) {
  const [datos, setDatos] = useState(
    {
      similarartists: {
        artist: [
          {
            name: "",
            image: [
              { "#text": "" },
              { "#text": "" },
              { "#text": "" },
              { "#text": "" },
            ],
          },
        ],
      },
    },
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqArtista, setbusqArtista] = useState("undefined");

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
    let propiedades = props.busqueda;
    if (propiedades === "") {
      propiedades = "undefined";
    }
    fetchData(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${propiedades}&api_key=d693fd9cd9996bb3a0e22ff64779ae5d&format=json`
    );
  }, [props]);

  // useEffect(() => {
  //   setbusqArtista(props.busqueda);
  // }, [props.busqueda]);
  return (
    <React.Fragment>
      {loading && <Loading />}

      {/* <h1>{props.busqueda}</h1> */}
      {error && <h1>Hubo un error</h1>}
      <div className="container">
        <div className="row">
          {datos.similarartists.artist.map((artista) => {
            return (
              <div className="col-md-3">
                <ArtistCard
                  titulo={artista.name}
                  img={artista.image[3]["#text"]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchResult;
