const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Please enter a password: ", function(input){
    let password = input
    let convPass = password.split
    if (password.length >= 10 && password.search("1234567891") >= 0){
        console.log(`
         ____                         _   _ _ 
        / ___|___  _ __ _ __ ___  ___| |_| | |
       | |   / _ \| '__| '__/ _ \/ __| __| | |
       | |__| (_) | |  | | |  __| (__| |_|_|_|
        \____  \___/|_|  |_|  \___|\___|\__(_(_)`)
    } else {
        console.log("Password is incorrect.")
    }
    reader.close()
})