import "../App.css";
import React, { useState, useEffect } from "react";
import ArtistCard from "./artistCard.js";
import "bootstrap/dist/css/bootstrap.css";
function SearchResult(props) {
  const [datos, setDatos] = useState(
    {
      similarartists: {
        artist: [{ name: "hola", image: [{ "#text": "" }] }],
      },
    },
    []
  );

  const fetchData = async (data) => {
    fetch(data)
      .then((res) => res.json())
      .then((datosSimilares) => setDatos(datosSimilares))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=babasonicos&api_key=d693fd9cd9996bb3a0e22ff64779ae5d&format=json"
    );
  }, []);
  return (
    <React.Fragment>
      {console.log(datos.similarartists.artist[0].image[0]["#text"])}
      <h1>{props.busqueda}</h1>
      <div className="container">
        <div className="row">
          {datos.similarartists.artist.map((artista) => {
            return (
              <ArtistCard
                titulo={artista.name}
                img={artista.image[0]["#text"]}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchResult;
