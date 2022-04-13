// Write your code below this line.
function findLuckyNumbers(n){
     // Numbers that can be picked from
    let possibleLuckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Array to push into
    let luckyNumbers = [];
    // Loop that runs through the param that is input
    for (let i = 0; i < n; i++){
        // Math.floor is rounding down all numbers so there's no decimals, random is picking random #'s and length
        // of the possible numbers given
        let x = Math.floor(Math.random() * possibleLuckyNumbers.length);
        // Pushing numbers taken from possibleLuckyNumbers array into empty array
        luckyNumbers.push(possibleLuckyNumbers[x])
        // Splicing repeat numbers out
        possibleLuckyNumbers.splice(x, 1)
    } 
    // Giving function the value of luckyNumbers array after it runs the loop
    return luckyNumbers
}
console.log(findLuckyNumbers(10))