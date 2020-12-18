import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Version Javascritp vanilla
// let elemento = document.createElement("p");
// elemento.innerHTML = "Hola soy emiliano de Carrodilla";
// let contenedor = document.querySelector("#root");
// contenedor.appendChild(elemento);

// con react
// let elemento = <p>Hola Mundo soy lo mismo pero con react</p>;
// let container = document.querySelector("#root");
// ReactDOM.render(elemento, container);

// let jsx = React.createElement("h1", {}, "hola soy un texto");
// let nombre = "Emiliano";
// let jsxMultiple = (
//   <div>
//     <h1>Soy una variable con muchos elementos soy {nombre}</h1>
//     <h3>jsx te amo</h3>
//     <p>esto es glorioso</p>
//   </div>
// );
// let container = document.querySelector("#root");
// ReactDOM.render(jsxMultiple, container);
