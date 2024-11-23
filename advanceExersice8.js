function validateStringArg(fn) {
  return function (...args) {
    for (const arg of args) {
      if (typeof arg !== "string") {
        throw new Error(
          `Invalid argument: ${arg}. Expected all arguments to be strings.`
        );
      }
    }
    return fn(...args);
  };
}
function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);

try {
  console.log(validatedOrderItem("Apple Watch", "iPhone", "MacBook")); //work
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItem("Apple Watch", 123, "MacBook")); //throw an error
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItems("Laptop", "Headphones")); //work
} catch (error) {
  console.error(error.message);
}

function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}
console.log(orderItems("Apple Watch", "iPhone", "MacBook"));
