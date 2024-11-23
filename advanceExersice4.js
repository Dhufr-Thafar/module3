function printFibonacci() {     //A
    let a = 0, b = 1;
  console.log(b);
    const interval = setInterval(() => {
      const next = a + b;
      console.log(next);
      a = b;
      b = next;
    }, 1000);
  }
  function printFibonacciTimeouts() {   // (B)
    let a = 0, b = 1;
  
    function printNext() {
      const next = a + b;
      console.log(next);
      a = b;
      b = next;
      setTimeout(printNext, 1000);
    }
    console.log(b);
    setTimeout(printNext, 1000);
  }
 
  function printFibonacciWithLimit(limit) {    // (C)
    let a = 0, b = 1, count = 1;
    console.log(b);
    const interval = setInterval(() => {
      if (count >= limit) {
        clearInterval(interval);
        return; }
      const next = a + b;
      console.log(next);
      a = b; b = next; count++;}, 1000);
  }

  function printFibonacciTimeoutsWithLimit(limit) {
    let a = 0, b = 1, count = 1;
    function printNext() {
      if (count >= limit) return;
      const next = a + b;
      console.log(next);
      a = b;
      b = next;
      count++;
      setTimeout(printNext, 1000);}
    console.log(b);
    setTimeout(printNext, 1000);
  }
  
  printFibonacci();
  printFibonacciTimeouts();
  printFibonacciWithLimit(5);
  printFibonacciTimeoutsWithLimit(10);