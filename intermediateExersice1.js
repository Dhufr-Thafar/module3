        // capatalise letters

function ex1 (str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(` `);           
}

console.log(ex1("hello iod")); 
console.log(ex1("this is first test")); 
console.log(ex1("this is second test")); 
console.log(ex1("good bye"));