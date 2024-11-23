function makeCounter(startFrom) {
    let currentCount = startFrom;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter(4)
        counter1();
        counter1();

    let counter2 = makeCounter(7);
        counter2(); // 1
        counter2(); // 2