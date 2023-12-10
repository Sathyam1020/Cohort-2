function wait1 (t1) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); 
        }, t1); 
    }); 
}

function wait2 (t2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, t2); 
    })
}

function wait3 (t3) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); 
        }, t3);
    })
}
const t1 = 1000; // 1 second
const t2 = 2000; // 2 seconds
const t3 = 1500; // 1.5 seconds 

function calculateTime(t1, t2, t3){
    const startTime = Date.now(); 

    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            //Calculate the time taken to complete the entire operation
            const endTime = Date.now(); 
            const totalTime = endTime - startTime; 
            return totalTime; 
        })
}

calculateTime(t1, t2, t3)
  .then(totalTime => {
    console.log(`Total time taken: ${totalTime} milliseconds`);
  })
  .catch(error => {
    console.error('An error occurred:', error);
});
