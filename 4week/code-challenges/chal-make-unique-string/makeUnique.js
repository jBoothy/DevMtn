// Write your solution below:
/*
Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/

const remDup = (input) =>{
    return input
    .split("")
    .filter(function(item, pos, self){
        return self.indexOf(item) == pos;
    })
    .join("")
}

console.log(remDup("helloworld"))
console.log(remDup("iwanttoclimbamountain"))