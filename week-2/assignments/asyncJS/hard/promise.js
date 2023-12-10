function wait (n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); 
        }, n * 1000); 
    }); 
}

const delayInSeconds = 3; 

console.log("Started"); 
wait(delayInSeconds).then(() => {
    console.log("Waited for the delay"); 
}).catch(error => {
    console.log(error); 
}); 