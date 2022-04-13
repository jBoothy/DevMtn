// Funcitons 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true
const myFavNum = 51;
const myNumBoo = Boolean(myFavNum);
// console.log(myNumBoo);

// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true
const myString = "test";
const stringBoo = Boolean(myString);
// console.log(stringBoo);

// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0
const booVar = true;
const convNum = Number(booVar);
// console.log(convNum);

// create a variable equal to a string of numbers, on the next line convert that string into a number using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the other one is a string
let numString = "8675309";
let convString = +numString;
// console.log(numString, convString);


// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, console.log it and the result will be the same as the other two versions
let inOneLine = +'8675309';
let inOneLine2 = Number(inOneLine); // Same thing as the line above
// console.log(inOneLine);
// console.log(inOneLine2)

// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail
let myHeight = "74in";
let withNum = Number(myHeight);
let withParse = parseInt(myHeight);
// console.log(withNum); // Will fail because it can't read "in". Looks only for number
// console.log(withParse); // Will print the first number in a string (HAS TO START WITH NUMBERS IN STRING OR WILL PRINT NaN)

// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors
let numVar = 51;
let stringNum = String(numVar);
// console.log(stringNum, numVar);

// create another variable but this time use concatenation of empty quotes to turn your number into a string
let stringNum2 = numVar + "";
// console.log(stringNum2)

// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string
const lovesFootball = true;
let doYouLoveFootball = "Do I love football? Yes, that is " + lovesFootball;
// console.log(doYouLoveFootball)


// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, starts with, and ends with the letter(s) you input as parameters
const myName = "John";

// .includes()
// console.log(myName.includes("oh")); // Prints true

// .startsWith()
// console.log(myName.startsWith("j")); // Prints false because capitilization matters

// .endsWith()
// console.log(myName.endsWith("n")); // Prints true

// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the words in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces
let trimExample = "      hello     ";
let trimFinished = trimExample.trim();
// console.log(trimFinished)

// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)
let lowerCase = "abcd";
let upperCase = lowerCase.toUpperCase();
let lowerCaseFinished = lowerCase.toLowerCase();
// console.log(upperCase);
// console.log(lowerCaseFinished);


// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string
let whatEver = "whatever I want";
let whatEverReplaced = whatEver.replace("w", "e");
let whatEverReplacedAll = whatEver.replaceAll("a", "z");
// console.log(whatEverReplaced);
// console.log(whatEverReplacedAll);

// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference
let stillWhateverIWant = "still saying whatever I want";
let splittingWithSpace = stillWhateverIWant.split(" ");
let splittingWithComma = stillWhateverIWant.split(",");
let splittingWithoutSpace = stillWhateverIWant.split("");
// console.log(splittingWithSpace);
// console.log(splittingWithComma);
// console.log(splittingWithoutSpace);

// Joinging Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
// console.log them to see the difference
let array = ["John", "Cassidy", "Vi"]
let joinWithNothing = array.join();
let joinWithNoSpace = array.join("");
let joinWithSpace = array.join(" ");
let joinWithAddition = array.join(" + ");
// console.log(joinWithNothing);
// console.log(joinWithNoSpace);
// console.log(joinWithSpace);
// console.log(joinWithAddition);


// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function
function noParam(){
    console.log("This has no parameters")
}
function oneParam(parameter){
    console.log(`This one has one parameter and it's ${parameter}`)
}
function twoParam(parameterOne, parameterTwo){
    console.log(parameterOne + parameterTwo)
    return parameterOne + parameterTwo
}
// noParam()
// oneParam("5")
// twoParam(9, 3) // Will run the console log part of the function
// console.log(twoParam(9, 3)) // Will use the return part of the function

// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error
let outterVar = "I'm in the outer scope."
function scopeTester(){
    let innerVar = "I'm in the scope of the function"
    console.log(innerVar, outterVar) // Will print correctly
}
// console.log(innerVar, outterVar) // innerVar out of scope error
// scopeTester()

// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code

// Declaration
function rooter(num){
    return Math.sqrt(num)
}

// Expression
const rooter2 = function(num){
    return Math.sqrt(num)
}

// Arrow
const rooter3 = (num) => {
    return Math.sqrt(num)
}

// console.log(rooter(36))
// console.log(rooter2(49))
// console.log(rooter3(144))

// then show an arrow function with implicit return as well
const implicit = word => `This arrow function has ${word} return`;
// console.log(implicit("implicit"))