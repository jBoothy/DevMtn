// Calculator

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? ", function(input){
	tokens = input.split(' ');
// tokens just referring to input value's (i.e. 2 + 2 = 0 1 2) - input split makes it so it reads 2 + 2 instead of 2+2
// Switch tokens around depending on where it needs to be in input
// Input needs to use spaces or it doesn't work correctly
mathSymbol = tokens[1] && tokens[3];
	num1 = Number(tokens[0]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[4]);

	if (mathSymbol === "+"){
		// Addition
		  console.log(num1 + num2);
	}
	else if (mathSymbol === "-"){
		// Subtraction
		console.log(num1 - num2);
  	}
	else if (mathSymbol === "*"){
		// Multiplication
		console.log(num1 * num2);
  	}
	else if (mathSymbol === "/"){
		// Division
		console.log(num1 / num2);
  	}
	else if (mathSymbol === "sqrt"){
		// Square Root
		console.log(Math.sqrt(num1));
	}
	else if (mathSymbol === "^"){
		// Exponential
		console.log(Math.pow(num1, num2))
	}
	else if (mathSymbol === "^3"){
		// Cube
		console.log(num1 * num1 * num1)
	}
	else if (mathSymbol === "raise"){
		// Square a number
		console.log(num1 ** num2)
	}
	else if (mathSymbol === "%"){
		// Modulus (Finding remainder)
		console.log(num1 % num2)
	}

	reader.close()
}	)
