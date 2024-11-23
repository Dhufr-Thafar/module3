const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
    
            // A. write function
    function printObjectProperties(obj) {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
          }
        }
      }
      printObjectProperties(sydney);


            //B. new ibject city
      const newYorkCity = {
        name: 'New York City',
        population: 8_336_817,
        state: 'New York',
        founded: '1624',
        timezone: 'America/New_York',
        nickname: 'The Big Apple'
      };
      printObjectProperties(newYorkCity);