// Given a word, return "true" if that word contains only unique characters. Return "false" otherwise.

/* example:
hasUniqueChars("Monday")
returns: true
hasUniqueChars("Moonday")
returns: false
*/

// Uppercase and lowerscase letters should be considered separately:
/* example:
hasUniqueChars("Bob")
returns: true
*/

// Write your code below

const hasUnique = (str) => {
    let unique = true
    for (let i = 0; i < str.length; i++){
        for (let j = i+1; j < str.length; j++){
            if (str[i] === str[j]){
                unique = false
            }
        }
    }
    return unique
}

console.log(hasUnique("John"))