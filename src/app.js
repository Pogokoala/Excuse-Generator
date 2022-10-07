/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The guinea pig", "Chubbie", "His pig", "My pig"];
  let action = ["ate", "gorged", "feasted", "devoured"];
  let what = ["pellets", "on a carrot", "on some cucumbers"];
  let when = ["yesterday.", "last week.", "last month."];

  function guineaPig() {
    document.getElementById("Pig").innerHTML =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      action[Math.floor(Math.random() * action.length)] +
      " " +
      what[Math.floor(Math.random() * what.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];
  }
  document.getElementById("btn").addEventListener("click", guineaPig);
};
