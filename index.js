const audit = {

  exerciseA() {

    function fn() {
      console.log(this);
    }

    // What is the value of `this` when we call fn()?

    const result = 'global window object';

    return result;
  },








  exerciseB() {

    var data = {
      type: 'complex',
      verify: function() {
        return this.type;
      }
    };

    // What is the value of `this` when we call data.verify())?

    const result = 'data';

    return result;
  },








  exerciseC() {

    const dog = {
      totalBarks : 4,
      bark: () => {
        this.totalBarks++;
      }
    };

    // What is the value of `this` when we call dog.bark();

    const result = 'dog';
    //I see that it is an ES6 arrow function, so the vaue of this is set when the function is created, but I think for this example, the value of this is still the object on both creation and execution (the previous exerciseB)
    return result;
  },








  exerciseD() {

    let greeting = 'welcome';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hey';
      }

      // Log A: greeting
      const newGreeting = ()  => {
        greeting = 'hi';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    // Log D: greeting
    greetingGenerator();

    const result = [
      { ‘D’: 'welcome' },
      { ‘A’: 'hi'},
      { ‘B’: 'hi' },
      { ‘C’: 'hi' }
    ];

    return result;
  },








  exerciseE() {

    var shoe = 'heel';
    // Log A: shoe

    function putOnShoe() {
      shoe = 'boot';

      // Log B: shoe
    }

    // Log C: shoe
    putOnShoe();

    // Log D: shoe

    const result = [
      { ‘A’: 'heel' },
      { ‘C’: 'heel'},
      { ‘B’: 'boot' },
      { ‘C’: 'boot' }
    ];

    return result;
  },








  exerciseF() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an array of just the names of the restuarants:

    // e.g.
    // ['Beckon', 'El Five', 'ChoLon', 'Super Mega Bien']

    const result = restaurants.reduce((acc, restaurant) => {
      acc.push(restaurant.name);
      return acc;
    }, []);

    return result;
  },








  exerciseG() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an array of objects that include just the name of the restaurant and whether takeout is available

    // e.g.
    // [
    //    { restaurant: 'Beckon', takeOut: false },
    //    { restaurant: 'El Five', takeOut: true },
    //    ..etc
    // ]

    const result = restaurants.reduce((acc, restaurant) => {
      acc.push({
        `restaurant: ${restaurant.name}`,
        `takeOut: ${restaurant.takeout}`
      });
      return acc;
    }, []);

    return result;
  },








  exerciseH() {

    const restaurants = [
      {
        name: 'Beckon',
        capacity: 15,
        cuisine: 'New American',
        takeout: false,
        popular_dishes: ['beef', 'pork', 'seafood']
      },
      {
        name: 'El Five',
        capacity: 50,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['seafood', 'lamb', 'steak']
      },
      {
        name: 'ChoLon',
        capacity: 70,
        cuisine: 'Asian Fusion',
        takeout: true,
        popular_dishes: ['pork', 'beef', 'seafood']
      },
      {
        name: 'Super Mega Bien',
        capacity: 40,
        cuisine: 'Tapas/small plates',
        takeout: true,
        popular_dishes: ['pork', 'duck', 'steak', 'seafood']
      }
    ];

    // Return an object whose keys are the different restaurant cuisines and whose values are arrays of the restaurants

    // e.g.
    // {
    //    'New American': ['Beckon'],
    //    'Tapas/small plates': ['El Five', 'Super Mega Bien'],
    //    'Asian Fusion': ['ChoLon']
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    //we have an array of objects
    //we want to create a new object
    //this object will have three properties: 'New American', 'Tapas/small plates', 'Asian Fusion'
    //the value of each property will be an array of restaurant names that have a cuisine value that matches one of the three properties -- if it matches, push the restaurant name to the corresponding array
    return result;
  },

  exerciseBonus() {

    // There is a war and nobody knows - the alphabet war!
    // There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

    // Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return 'Left side wins!', when the right side wins return 'Right side wins!', in other case return 'Let's fight again!'.

    // The left side letters and their power:
    // w - 4
    // p - 3
    // b - 2
    // s - 1

    // The right side letters and their power:

    // m - 4
    // q - 3
    // d - 2
    // z - 1

    // All other letters don't have power and are only victims.

    // alphabetWar("z");        //=> Right side wins!
    // alphabetWar("zdqmwpbs"); //=> Let's fight again!
    // alphabetWar("zzzzs");    //=> Right side wins!
    // alphabetWar("wwwwwwz");  //=> Left side wins!


    // Fill out functionality below. Your result variable (line 320) is already set up and does not need to be modified

    function alphabetWar(fight) {

    }


    const result = {
      one: alphabetWar('z'),
      two: alphabetWar('zdqmwpbs'),
      three: alphabetWar('zzzzs'),
      four: alphabetWar('wwwwwwz')
    };

    return result;
  }
};

module.exports = audit;
