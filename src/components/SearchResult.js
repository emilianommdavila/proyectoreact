import "../App.css";
import React, { useState } from "react";
import ArtistCard from "./artistCard.js";
import "bootstrap/dist/css/bootstrap.css";
function SearchResult(props) {
  console.log(props.busqueda);

  return (
    <React.Fragment>
      <h1>{props.busqueda}</h1>
      <div className="container">
        <div className="row">
          <ArtistCard
            img="https://img.discogs.com/pKIfIFvNP0zP0Of5oq23P7fB44k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1538759-1579910245-4930.jpeg.jpg"
            titulo="Iron Maiden"
          />
          <ArtistCard
            img="  https://consequenceofsound.net/wp-content/uploads/2011/09/nirvana300-1.jpg?quality=80"
            titulo="Nirvana"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchResult;
