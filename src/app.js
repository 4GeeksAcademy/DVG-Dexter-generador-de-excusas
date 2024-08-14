import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["mi perro", "mi abuela", "el cartero", "mi gato"];
let action = ["se comió", "se hizo pis en", "destrozó", "rompió"];
let what = ["mis tareas", "mi telefono", "el coche"];
let when = [
  "antes de empezar mis clases",
  "cuando estaba durmiendo",
  "mientras hacía ejercicio",
  "durante la comida",
  "mientras estuve ocupado"
];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}
function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
