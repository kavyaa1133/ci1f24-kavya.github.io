let colors;
let currentColor;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-overlay"); // Attach canvas to overlay div
  colors = ['#E60012', '#FF7F32', '#007A4D', '#0066CC', '#757575']; // Subway line colors
  currentColor = random(colors); // Pick an initial random color
  clear(); // Start with an empty canvas
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    fill(currentColor + "88"); // Slightly transparent fill
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function mousePressed() {
  clear(); // Clear old drawing
  currentColor = random(colors); // Change to a random color
}
