let counter = 0;

function updateCounter() {
  console.log('Counter:', counter);
  counter++;

  // Schedule the next update after 1000 milliseconds (1 second)
  setTimeout(updateCounter, 1000);
}

// Start the counter
updateCounter();

// Stop the counter after a certain duration (e.g., 10 seconds)
setTimeout(() => {
  console.log('Counter stopped.');
}, 10000);
