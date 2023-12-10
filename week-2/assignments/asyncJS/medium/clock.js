function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    console.log(timeString);
  
    // Schedule the next update after 1000 milliseconds (1 second)
    setTimeout(updateClock, 1000);
  }
  
  // Start the clock
  updateClock();
  