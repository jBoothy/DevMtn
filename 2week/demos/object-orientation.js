const person = {
    firstName: "John",
    lastName: "Booth",
    age: 28
}
// console.log(person.firstName, person["lastName"])

let meal = {
    appetizer: "caesar salad",
    entree: "steak and potatoes",
    dessert: "cheese cake",
    drink: "water"
}

// Deconstructing: Making a new variable called "dessert" whose value comes from the dessert property on the meal object.
const {dessert} = meal
// Deconstructing multiple items
const {entree, appetizer} = meal
// Making nickname
const {drink: myDrink} = meal

// Will print items in a row
// console.log(entree, appetizer, dessert)

// Drink will not be defined
// console.log(drink)

// More "aliases"
const {appetizer: myFoodsFood, entree: love, dessert: whatIsLove, drink: lifeBlood} = meal

// console.log(myFoodsFood, love, whatIsLove, lifeBlood)

// Accessing values using loop
for (const key in person){
    // console.log(person[key])
    // console.log(key, person, person[key]) // Show's the different ways to print what you're trying to access.
    // Checking object value
    if (person[key] === "Booth"){
        // console.log(`This is the last name: ${person[key]}`)
    }
}


// Adding things to the object
// dot method
person.job = "Welder";
// console.log(person)
// bracket notation
person["pet"] = "Cocker Spaniel"
// console.log(person)

// deleting item out of object
delete person.pet

// CLASSES ----------------------------------

class Dog {
    constructor(dogName, dogBreed, dogAge){
        // console.log("Dog class", dogName, dogBreed, dogAge)
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;
        this.toys = [];
        this.hunger = 0;
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed} and my favorite toy is a ${this.toys}!`)
    }

    addToy(toy){
        this.toys.push(toy)
    }

    addHunger(food){
        this.hunger += food
    }
}

const freyja = new Dog("Freyja", "Cocker Spaniel", 3)
// Prints Dog { name: "Freyja", breed: "Cocker Spaniel", age: 3}
// console.log(freyja)
// Pulls greeting from class using Freyja's info
// freyja.greeting()

const gus = new Dog("Gus", "Shih Tzu", 4)
// Uses both info from Gus and Freyja with the greeting from the "Dog" class
freyja.addToy("Squeaky ball")
// freyja.greeting()
gus.addToy("Rope")
// gus.greeting()
// console.log(gus)

// Extending
class Puppy extends Dog {
    constructor (dogName, dogBreed, dogAge, puppyTrainingLevel){
        // console.log("Puppy class", dogName, dogBreed, dogAge, puppyTrainingLevel)
        // Pass stuff all the way back up to Dog
        super(dogName, dogBreed, dogAge)
        // Giving it unique thing vs Dog class which doesn't get it
        this.trainingLevel = puppyTrainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }

    greeting(){
        // Adds to Dog greeting
        super.greeting()
        console.log("And I am a puppy!")
    }
}

const zoe = new Puppy("Zoe", "Cocker Spaniel", 1, 0)
zoe.addToy("Squeaky ball")
zoe.addHunger(10)
zoe.levelUp(2)
// gus.greeting()
// zoe.greeting()