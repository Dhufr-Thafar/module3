const delayMsg = (msg) =>
{
console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delaye');
delayMsg('#4: Not delayed at all');
let preventRun = setTimeout(delayMsg, 11000, '#5: Delayed by 11000ms');
clearTimeout (preventRun);
setInterval(() => console.log("tiktok"), 1000);