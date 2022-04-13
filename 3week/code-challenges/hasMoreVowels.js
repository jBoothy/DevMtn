const hasMoreVowels = (word) => {
    word = word.toLowerCase()
    let vow = 0;
    let cons = 0;
    for (i of word){
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
            vow++
    }
    else {
        cons++
    }
}return vow > cons ? true : false
}

console.log(hasMoreVowels("moose"))
console.log(hasMoreVowels("Aal"))
console.log(hasMoreVowels("yay"))
console.log(hasMoreVowels("mice"))