// Write your code below

const isPalindrome = (input) => {
    let newInput = input.length
    for (let i = 0; i < newInput / 2; i++){
            if (input[i] === input[newInput - i - 1]){
                return true
            } else{
                return false
            }
        }
    } 

console.log(isPalindrome("Kayak"))