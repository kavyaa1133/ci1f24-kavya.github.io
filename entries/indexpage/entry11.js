let brownstones = document.getElementById("brownstones");
let body = document.body;
let description = document.querySelector(".description");

brownstones.addEventListener("click", function () {
  // Toggle the active class for glow effect
  brownstones.classList.toggle("active");

  // Toggle background texture
  body.classList.toggle("brownstone-bg");

  // Toggle visibility of the description
  description.classList.toggle("hidden");
});


let paragraphs = document.querySelectorAll("p");

// Define the color codes in an array
const colors = ["#4E2A2A", "#8A5A44", "#A36842", "#6D4C41", "#C69076"];

// Loop through each paragraph and add an event listener
paragraphs.forEach(function(paragraph, index) {
  paragraph.addEventListener('click', function () {
    // Get the current background color in hex format, and check if it's the same as the target color
    if (paragraph.style.backgroundColor === colors[index] || getComputedStyle(paragraph).backgroundColor === colors[index]) {
      paragraph.style.backgroundColor = ''; // Reset to default background (transparent)
    } else {
      paragraph.style.backgroundColor = colors[index]; // Set to the respective color
    }
  });
});

