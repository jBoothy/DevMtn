// Write your code below this line
/*
In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/

const decoder = (code) => {
    let solution = ""; // Makes sure the solution is a string
    let decipher = Number(code[0]); // Catches the number to decode the string
    for (let i = 1; i < code.length; i++){ //Loops starting after the decipher number
        let strValue = code[i].charCodeAt() + decipher // Capture ascii code for given letter. Also grabs value of decipher
        // console.log(code[i].charCodeAt())
        solution += String.fromCharCode(strValue) // Add letter to beginning of string
        // console.log(solution)
    }
    return solution
}

console.log(decoder("1a"))
console.log(decoder("3ce"))
console.log(decoder("2fcjjm"))
