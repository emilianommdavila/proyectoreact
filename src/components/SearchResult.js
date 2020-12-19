import "../App.css";
import React, { useState } from "react";
import ArtistCard from "./artistCard.js";
import "bootstrap/dist/css/bootstrap.css";
function SearchResult(props) {
  const [datos, setDatos] = useState({
    artist: [
      {
        name: "Allie X",
        match: "1",
        url: "https://www.last.fm/music/Allie+X",
        image:
          "https://lastfm-img2.akamaized.net/i/u/300x300/f8f73092192c83756e6a02765c76b1fd.png",
      },
      {
        name: "Lorde",
        mbid: "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
        match: "0.827789",
        url: "https://www.last.fm/music/Lorde",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/e6201e8a9499cc9fbedb9947af262c79.png",
      },
      {
        name: "Billie Eilish",
        match: "0.811899",
        url: "https://www.last.fm/music/Billie+Eilish",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/88d7c302d28832b53bc9592ccb55306b.png",
      },
      {
        name: "Marina",
        mbid: "fe0ad4d4-391b-4f43-b02f-4d2ed0ab2b5e",
        match: "0.648183",
        url: "https://www.last.fm/music/Marina",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/1b8e4140e3b351df942b9d83f55f6f72.png",
      },
      {
        name: "BROODS",
        mbid: "68205c8f-9518-4b49-8df7-bd297da67599",
        match: "0.573807",
        url: "https://www.last.fm/music/BROODS",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/41eaab105c765d54af66001b084bbe71.png",
      },
      {
        name: "Declan Mckenna",
        match: "0.525606",
        url: "https://www.last.fm/music/Declan+Mckenna",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/8f29ff0e05f470a2865ba82dacffdfcc.png",
      },
      {
        name: "Susanne Sundfør",
        mbid: "f3f9e76a-0685-4a9a-97d1-6fa2b50f9fba",
        match: "0.463562",
        url: "https://www.last.fm/music/Susanne+Sundf%C3%B8r",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/13a1eea42dfde1e4382097daf5197432.png",
      },
      {
        name: "iamamiwhoami",
        mbid: "9aaa99df-9383-47df-92af-8bb5e5595815",
        match: "0.457291",
        url: "https://www.last.fm/music/iamamiwhoami",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/3c0acc3e6472e97ac787229a02132aa7.png",
      },
    ],
  });

  return (
    <React.Fragment>
      <h1>{props.busqueda}</h1>
      <div className="container">
        <div className="row">
          {datos.artist.map((artista, i) => {
            return <ArtistCard img={artista.image} titulo={artista.name} />;
          })}

          {/* <ArtistCard
            img="https://img.discogs.com/pKIfIFvNP0zP0Of5oq23P7fB44k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1538759-1579910245-4930.jpeg.jpg"
            titulo="Iron Maiden"
          />
          <ArtistCard
            img="  https://consequenceofsound.net/wp-content/uploads/2011/09/nirvana300-1.jpg?quality=80"
            titulo="Nirvana"
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchResult;
