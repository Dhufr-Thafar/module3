function camelCase (str) {
    return str.split(`-`).map((word, i) => {
        if(i == 0) 
            return word
        else
            return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
}

console.log(camelCase(`animation-iteration-count`)); 
console.log(camelCase('margin-left'))
console.log(camelCase('background-image'))
console.log(camelCase('display'))