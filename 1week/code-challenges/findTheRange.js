// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let smallestNumber = array[0]
let biggestNumber = array[0]
for (i = 0; i < array.length; i++){
    if (array[i] < smallestNumber){
        smallestNumber = array[i]
    } else if (array[i] > biggestNumber){
        biggestNumber = array[i]
    }
}

console.log(smallestNumber, biggestNumber)