// JavaScript to handle the color change on click
const items = document.querySelectorAll('.item');

// Add event listener to each item
items.forEach(item => {
    item.addEventListener('click', () => {
        const color = item.getAttribute('data-color'); // Get the color from the data-color attribute
        document.body.style.transition = 'background-color 1s ease'; // Smooth transition
        document.body.style.backgroundColor = color; // Change the background color of the body
    });
});


// Add event listener for each item
items.forEach(item => {
  item.addEventListener('click', () => {
    // Select all <p> elements inside the .flex-container and change their color
    const paragraphs = document.querySelectorAll('.flex-container p');
    paragraphs.forEach(paragraph => {
      paragraph.style.color = 'white';
    });
  });
});