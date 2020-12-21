import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./pageSearchResult";
import PageHome from "./pageHome";
import ArtistPage from "./components/ArtistPage";
import Post from "./components/prueba";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layaout from "./components/layaout";
function App() {
  return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path="/busqueda" component={PageSearchResult}></Route>
          <Route exact path="/artista" component={ArtistPage}></Route>
          <Route exact path="/" component={PageHome}></Route>
        </Switch>
      </Layaout>
    </BrowserRouter>
  );
}

export default App;
