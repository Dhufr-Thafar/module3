class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}
const myPreciseClock = new PrecisionClock("Precise Clock:", 500);
myPreciseClock.start();
setTimeout(() => myPreciseClock.stop(), 5000);


class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime; 
    }
  
    display() {
      const date = new Date();
      let [hours, mins] = [date.getHours(), date.getMinutes()];
  
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
  
      const currentTime = `${hours}:${mins}`;
      console.log(`${this.prefix} ${currentTime}`);
  
      if (currentTime === this.wakeupTime) {
        console.log('Wake Up!');
        this.stop();
      }
    }
  }
  const myAlarmClock = new AlarmClock('Alarm Clock:', '07:00');
  myAlarmClock.start();