import _ from "lodash";
import "./scss/test.scss";

import $ from "jquery";
import "bootstrap";

console.log("DSLKJLJF");

function component() {
  var element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

window.onload = function() {
  document.body.appendChild(component());
};

$(function() {
  console.log("SDLFJKLD");
});