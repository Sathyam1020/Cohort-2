function sleep(milliseconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
  
const time = 2000; 

sleep(time).then(() => {
    console.log("Slept nicely"); 
}).catch(error => {
    console.log(error); 
})
