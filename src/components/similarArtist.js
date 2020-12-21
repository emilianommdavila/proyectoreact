import "../App.css";
import React, { useState } from "react";
import ArtistCard from "./artistCard";
import "bootstrap/dist/css/bootstrap.css";

function SimilarArtist() {
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
          </div>
          <div className="col-md-3">
            {" "}
            <ArtistCard
              img="https://placehold.it/350x350"
              titulo="TestSimilares"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SimilarArtist;
