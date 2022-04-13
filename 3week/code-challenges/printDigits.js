/*Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. 
Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

printDigits(1)
// 1

printDigits(314)
// 4
// 1
// 3

printDigits(12)
// 2
// 1
*/

const printDigits = (num) => {
    let n = num
    let rev = 0, rem;
    while (n > 0){
        rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10)
    }
    return rev
}

console.log(printDigits(1))
// 1
console.log(printDigits(314))
// 413
console.log(printDigits(12))
// 21