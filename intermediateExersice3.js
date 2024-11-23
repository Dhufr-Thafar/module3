const animals = ['Tiger', 'Giraffe']

animals.push(`Cat`,`Dog`);
animals.unshift(`Lion`,`Fox`);
animals.sort();

const replace = (newAnimal) => {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newAnimal;
}
replace('Elephant');

const matching = (beginsWith) => {
    const searchTerm = beginsWith.toLowerCase();
    
    return animals.filter(animal => animal.toLowerCase().startsWith(searchTerm)
    );
};
console.log(animals);
console.log(matching(`D`));
console.log(matching(`L`));
console.log(matching(`C`));
console.log(matching(`T`));