/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let color = "";
let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
let simbolos = [
  {
    icono: "♦",
    clase: "diamond",
    color: "red"
  },
  {
    icono: "♥",
    clase: "heart",
    color: "red"
  },
  {
    icono: "♠",
    clase: "spade",
    color: "black"
  },
  {
    icono: "♣",
    clase: "club",
    color: "black"
  }
];

// 1.- Generamos un valor random para la carta
function generarValor() {
  let indice = Math.floor(Math.random() * 12);
  return valores[indice];
}

// 2.- Generamos símbolo aleatorio y devolvemos tanto el símbolo como la clase:
function generarSimbolo() {
  let indice = Math.floor(Math.random() * 4);
  color = simbolos[indice].color;
  return simbolos[indice].icono;
}

// 3.-Insertar los valores del objeto al HTML
function renderCard() {
  document.getElementById("head").innerHTML = generarSimbolo();
  document.getElementById("center").innerHTML = generarValor();
  document.getElementById("footer").innerHTML = document.getElementById(
    "head"
  ).innerHTML;
}

renderCard();
document.write(color);
