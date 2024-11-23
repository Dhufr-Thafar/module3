Function.prototype.delay = function (ms) {
  const originalFunction = this;
  return function (...args) {
      setTimeout(() => originalFunction.apply(this, args), ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5);

function multiply2(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply2.delay(500)(2, 3, 4, 5);