let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description();

setTimeout(function () {
  car.description();
}, 200);

let newCar = { ...car, year: 2025 }; // change the ear of the car
console.log(newCar.year);

setTimeout(function () {
  car.description();
}, 300);

setTimeout(car.description.bind(car), 500); // use bind
