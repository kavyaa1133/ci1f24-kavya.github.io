let body = document.body;
let buttons = document.querySelectorAll(".button");

// Array of colors to assign to the buttons (based on the color codes you provided)
const buttonColors = [
  "#E5B80B",    // Gold
  "#6A4E23",    // Bronze
  "#B3D9C7",    // Light Patina Green
  "#B2A58D",    // Muuted Copper
  "#5B8A71"     // Moss Green
];

function turnOnLight() {
  // Toggle the light class on the body
  body.classList.toggle("light");

  // Change the light color to the one corresponding to the clicked button
  let index = Array.from(buttons).indexOf(this);  // Find the index of the clicked button
  body.style.setProperty('--light-color', buttonColors[index]);  // Set custom property for light color
  
  // Toggle the buttonOn class to change its own color
  this.classList.toggle("buttonOn");
}

// Add event listeners to all the buttons
buttons.forEach(button => {
  button.addEventListener("click", turnOnLight);
});
