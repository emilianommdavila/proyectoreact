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

  const fetchData = async (data) => {
    fetch(data).then((res) => {
      if (res.status !== 200) {
        console.log("error en la solicitud");
        setError(true);
      } else {
        console.log(res);

        res
          .json()
          .then((datosSimilares) => setDatos(datosSimilares))
          .then(setLoading(false));
        // .catch(setError(true));
      }
    });
  };
  useEffect(() => {
    fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=andres_calamaro&api_key=d693fd9cd9996bb3a0e22ff64779ae5d&format=json"
    );
  }, []);

  return (
    <React.Fragment>
      {/* {(datos.error && <h1>soyunError</h1>) || <h1>todo bien</h1>} */}
      {/* {loading && <Loading />} */}
      {/* {console.log(datos.similarartists.artist[0].image[0]["#text"])} */}
      {/* {console.log(loading)} */}
      <h1>{props.busqueda}</h1>
      {error && <h1>Hubo un error</h1>}
      <div className="container">
        <div className="row">
          {datos.similarartists.artist.map((artista) => {
            return (
              <ArtistCard
                titulo={artista.name}
                img={artista.image[3]["#text"]}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchResult;
