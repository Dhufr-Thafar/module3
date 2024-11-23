function randomDelay() {
    }
    randomDelay().then(() => console.log('There appears to have been a delay.'));
    
function randomDelay() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 20) + 1;
      const delayInMs = delay * 1000;
  
      setTimeout(() => {
        if (delay % 2 === 0) {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delayInMs);
    });
  }
  
  randomDelay()
    .then((delay) => {
      console.log(`Success! The delay was ${delay} seconds.`);
    })
    .catch((delay) => {
      console.log(`Failure! The delay was ${delay} seconds.`);
    });