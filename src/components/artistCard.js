import React from "react";
import "./artistCard.css";

function ArtistCard(props) {
  return (
    <div className="col-6 col-3">
      <div className="item">
        <img className="imagen" src={props.img} />
        <p className="titulo">{props.titulo}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
