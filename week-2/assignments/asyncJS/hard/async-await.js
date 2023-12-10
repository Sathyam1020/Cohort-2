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

async function calculateTime(t1, t2, t3){
    const startTime = Date.now(); 
    await wait1(t1); 
    await wait2(t2); 
    await wait3(t3); 
    const endTime = Date.now(); 
    const toalTime = endTime - startTime; 
    return totalTime; 
}

calculateTime(t1, t2, t3)
  .then(totalTime => {
    console.log(`Total time taken: ${totalTime} milliseconds`);
  })
  .catch(error => {
    console.error('An error occurred:', error);
});
