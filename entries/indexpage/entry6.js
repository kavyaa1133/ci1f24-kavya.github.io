let button = document.querySelector(".button");
let colors = ["#FF00FF", "#00c8ff", "#39FF14", "#FF5F1F"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);