import React, { useState, useEffect } from "react";
import "./artistCard.css";
import { Link } from "react-router-dom";
function ArtistCard(props) {
  return (
    <div className="col-6 col-3">
      <Link to={"/artista?" + props.titulo}>
        <div className="item">
          <img className="imagen" src={props.img} />
          <p className="titulo">{props.titulo}</p>
        </div>
      </Link>
    </div>
  );
}

export default ArtistCard;
