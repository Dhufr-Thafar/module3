let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {    //Calculate total salaries
  let total = 0;
  for (let salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}
console.log(sumSalaries(salaries));


const array1 = Object.values(salaries);

const topEarner = (salaries) => Math.max(...Object.values(salaries));
console.log(topEarner(salaries));       
const salary = salaries.find(salary => salary.key === topEarner(salaries));
console.log(salary = salaries.find(salary => salary.key === topEarner(salaries)));