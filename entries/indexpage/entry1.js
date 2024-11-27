const taxiContainer = document.querySelector('.taxi-container');

function createTaxi() {
  const taxi = document.createElement('div');
  taxi.classList.add('taxi');
  taxi.style.animationDelay = `${Math.random() * 2}s`;
  taxiContainer.appendChild(taxi);

  // Remove taxi after animation ends to avoid DOM clutter
  setTimeout(() => {
    taxi.remove();
  }, 4000);
}

// Create a new taxi every second
setInterval(createTaxi, 1000);