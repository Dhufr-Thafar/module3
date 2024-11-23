const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map(); // create new Map

phoneBookDEF.set('David', '0467123456');
phoneBookDEF.set('Emily', '0422113344');
phoneBookDEF.set('Frank', '0488123456');

const DEFArray= Array.from(phoneBookDEF);   // set array for DEF map
console.log(DEFArray);

phoneBookABC.set('Caroline', '0455221182')  //Update phone number
console.log(phoneBookABC.get('Caroline'));

function printPhoneBook(contacts){contacts.forEach(([name,phone]) => { 
    console.log(`${name}:${phone}`);
});
}

printPhoneBook(DEFArray);
const phoneBook = new Map([...phoneBookABC,...phoneBookDEF])
const newMap= Array.from(phoneBook)

printPhoneBook(newMap);
