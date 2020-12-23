import "../App.css";
import React, { useState } from "react";
import ArtistCard from "./artistCard";
import "bootstrap/dist/css/bootstrap.css";

function SimilarArtist(props) {
  console.log(props.prop);
  return (
    <React.Fragment>
      <div className="centrarLargo">
        <div className="row centrar">
          <div className="col-md-12">
            <h5>Artistas Similares</h5>
          </div>
        </div>

        <hr />
        <div className="row">
          {props.prop.slice(0, 4).map((artista) => {
            return (
              <div className="col-md-3">
                <ArtistCard
                  titulo={artista.name}
                  img={artista.image[3]["#text"]}
                />
              </div>
            );
          })}
          {/* <div className="col-md-3">
            {" "}
            <ArtistCard
              img="https://placehold.it/350x350"
              titulo="TestSimilares"
            />
          </div>
          <div className="col-md-3">
            {" "}
            <ArtistCard
              img="https://placehold.it/350x350"
              titulo="TestSimilares"
            />
          </div>
          <div className="col-md-3">
            {" "}
            <ArtistCard
              img="https://placehold.it/350x350"
              titulo="TestSimilares"
            />
          </div>
          <div className="col-md-3">
            {" "}
            <ArtistCard
              img="https://placehold.it/350x350"
              titulo="TestSimilares"
            />
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SimilarArtist;
