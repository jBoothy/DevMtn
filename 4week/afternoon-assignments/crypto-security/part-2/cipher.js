// My cipher will use the length of the sentence to be coded to perform multiple caesar shifts based on how long the sentence is, and which letter positon it is in.
// for `i love cryptography` the initial shift will be the sentence length(3 words) and that will add to the first letter position, the second letter of the word will add 1 to the shift, etc. each letter will be preceeded by a number which tells how many times its wrapped the alphabet 
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
const cipher = (str)=>{
    str = str.toLowerCase()
    let arr=str.split(` `).filter(e=>e!==``)
    let shift = arr.length
    let encoded = []
        for (i in arr){
            let word = ``
            for (j in arr[i]){
                let index = parseInt(j)+parseInt(i)+shift+alphabet.indexOf(arr[i][j])
                let temp =0
                if(index>26){
                    temp = Math.floor(index/26)
                    index %=26
                }
                word += temp+alphabet[index]
            } 
        encoded.push(word)
        }return encoded.join(` `)
}
console.log(cipher(`a      b`))
const decode = (str)=>{
    str = str.toLowerCase()
    let arr=str.split(` `).filter(e=>e!==``)
    let shift = arr.length
    let decoded = []
        for (i in arr){
            let word = ``
            for (let j=0;j < arr[i].length;j++){
                if (j%2!==0){
                }else{
                        let index = (alphabet.indexOf(arr[i].charAt(j+1))-Math.floor(parseInt(j)/2)-parseInt(i)-shift)+(parseInt(arr[i].charAt(j))*26)
                        word += alphabet[index]
                }
            } 
            decoded.push(word)
        }return decoded.join(` `)
}
console.log(decode(`0c    0e`))