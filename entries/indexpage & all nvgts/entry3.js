let paragraphs = document.querySelectorAll("p");

// Define the color codes in an array
const colors = ["#1e3f66", "#6A7F47", "#4F6E73", "#7D7F7C", "#8A9A7B"];

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
