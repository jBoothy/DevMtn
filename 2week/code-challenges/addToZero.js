// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

let istrue = false // Will print false if not true
for (let i = 0; i < array.length; i++){
    for (let x = i + 1; x < array.length; x++){
        if (array[i] + array[x] === 0){
            istrue = true
            // console.log(array[i]) just showing what variable is making it true
        } // putting else will just rotate through and keep it false. It won't print true
    }
}

console.log(istrue)