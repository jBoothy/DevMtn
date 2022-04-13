let backpack = [];
// Pushes item on back end of array
backpack.push("pokeball")
backpack.push("potion")
backpack.push("pokedollars")

// backpack.shift() // Removes first item in array
backpack.splice(0, 1) // Position in array, removing x items, inserting more

let stone = "water stone"
backpack.push(stone)

backpack.pop() // Removes last item in array

// console.log(backpack.length)

backpack.push("great ball", "antidote", "revive") // Pushing multiple items

let satchel = backpack.splice(3,2) // Moving items from array into new variable

/* Changing to make it look more natural instead of printing array
 for (let i = 0; i < backpack.length; i++){
     console.log(`This is the item at the slot ${i+1}: `, backpack[i])
 } */

/* Only showing first two items
for (let i = 0; i < 2; i++){
    console.log(backpack[i])
}*/

if (backpack.length > 2){
    for (let i = 0; i < 2; i++){
        console.log(backpack[i])
    }
} else {
    for (let i = 0; i < backpack.length; i++){
        console.log(`This is the item at the slot ${i+1}: `, backpack[i])
    }
}


// console.log(backpack)
// console.log(satchel)


// Scope Lesson
let guessMe = 54

while (guessMe < 100) {
    // console.log("_______________", guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log("divisible by 4 or 5, added 25", guessMe)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log("divisible by 3, subracted 27", guessMe)
    } else {
        guessMe += 3
        console.log("added 3", guessMe)
    }
    guessMe += 22
    console.log("added 22", guessMe)
}
console.log("Final value: ", guessMe)
