class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  }
            // can drive 

  PersonClass.prototype.canDrive = function() {
    return this.age >= 16;
  };

            // A&B. create 3 new persons

    let person1 = new PersonClass ("Alice", 30);
    let person2 = new PersonClass ("Bob", 15);
    let person3 = new PersonClass('Charlie', 40);

              // C. print person object to consol

    function printPersonProperties(person) {        // check this section if its works $$$$$
    console.log('Name:', person.name);
    console.log('Age:', person.age);
    console.log('Human:', person.human);
    console.log('Can drive:', person.canDrive());
    }

    printPersonProperties(person1);
    printPersonProperties(person2);
    printPersonProperties(person3);

            // done by dhufr