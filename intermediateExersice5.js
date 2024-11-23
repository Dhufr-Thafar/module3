let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

function currencyAddition(float,float2){
    return parseFloat((float+float2).toFixed(2))
}

function currencyOperation(float1, float2, operation, numDecimal = 2) {
    if(operation == '+')
        result = float1 + float2 
    else if(operation == '*')
        result = float1 * float2 
    else if(operation == '/')
        result = float1 / float2 
    else if(operation == '-')
        result = float1 - float2 
        
    return parseFloat(result.toFixed(numDecimal))
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

console.log(currencyOperation(0.1234, 0.2345, '+', 3)) // true

console.log(currencyAddition(twentyCents,tenCents));

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen)