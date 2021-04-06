// function add(a, b) { 
// 	return a + b;
// }

// It is same as:
// let add = function(a, b) { 
// 	return a + b;
// }

// let add = (a, b) => { 
// 	return a + b;
// }

// It is possible when the functions-body statement is in one row the following syntax
let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

function calculate(operation, firstOperand, secondOperand) {
	let result = operation(firstOperand, secondOperand);
	return result;
}

let sum = calculate(add, 5, 10);
let product = calculate(multiply, 5, 10);

console.log(sum)
console.log(product)
console.log(multiply)