// FIRST CLASS / HIGHER-ORDER FUNCTIONS

// function add(a, b) { 
// 	return a + b;
// }

// // It is same as:
// let add = function(a, b) { 
// 	return a + b;
// }
// // It is same as:
// let add = (a, b) => { 
// 	return a + b;
// }

// // It is possible when the functions-body statement is in one row the following syntax
// let add = (a, b) => a + b;
// let multiply = (a, b) => a * b;

// function calculate(operation, firstOperand, secondOperand) {
// 	let result = operation(firstOperand, secondOperand);
// 	return result;
// }

// let sum = calculate(add, 5, 10);
// let product = calculate(multiply, 5, 10);

// console.log(sum)
// console.log(product)
// console.log(multiply)


// Return function
// function getOperation() {
// 	return function(a, b) {
// 		return a + b;
// 	}
// }

// Same as
// function getOperation() {
// 	let add = function(a, b) {
// 		return a + b;
// 	}
// 	return add;
// }

// // Operation is a function and it can be executed with providing numbers
// let operation = getOperation();

// console.log(operation(10, 20))


// PREDICATES
let isValidName = function(name) {
	if (name.split(' ').length == 2) {
		return true;
	}
	return false;
}

console.log(isValidName('Ivan Ivanov'));
console.log(isValidName('Ivan Ivanov Petrov'));
console.log(isValidName('Pesho'));
