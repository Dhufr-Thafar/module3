const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

const totalMinutes = (today.getHours() * 60) + today.getMinutes();      // A
console.log(totalMinutes + ' total minutes have passed so far today');

console.log(totalMinutes * 60 +`total seconds passed so far today`);    //B


