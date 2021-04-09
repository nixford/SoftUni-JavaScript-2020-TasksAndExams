// // FIRST CLASS / HIGHER-ORDER FUNCTIONS
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


// // RETURN FUNCTIONS
// function getOperation() {
// 	return function(a, b) {
// 		return a + b;
// 	}
// }

// // Same as
// function getOperation() {
// 	let add = function(a, b) {
// 		return a + b;
// 	}
// 	return add;
// }

// // Operation is a function and it can be executed with providing numbers
// let operation = getOperation();
// console.log(operation(10, 20))


// // PREDICATES
// let isValidName = function(name) {
// 	if (name.split(' ').length == 2) {
// 		return true;
// 	}
// 	return false;
// }

// // Same as
// let isValidName = name => {
// 	return name.split(' ').length == 2;
// }

// // Same as
// let isValidName = name => name.split(' ').length == 2;
// console.log(isValidName('Ivan Ivanov'));
// console.log(isValidName('Ivan Ivanov Petrov'));
// console.log(isValidName('Pesho'));

// let names = [
// 	'Pesho',
// 	'Ivan Petrov',
// 	'Gosho Ivanov Petrov',
// 	'Mariyka Petrova'
// ];

// // Can be used, as follows
// let filteredNames = names.filter(isValidName);
// Also
// let filteredNamesTwo = names.filter(name => name.split(' ').length == 2);
// Also
// let filteredNamesThree = names.filter(x => isValidName(x)); // not necessery extention of the code

// console.log(filteredNames);
// console.log(filteredNamesTwo);
// console.log(filteredNamesThree);


// // PURE FUNCTIONS - returns always the same result by given input - doesn't depend on system state
// let add = (a, b) => a + b;

// // IMPURE FUNCTIONS - depend on system state
// let impureFunction = function(text) {
// 	return new Date() + text;
// }
// console.log(impureFunction('Pesho'));


// // REFERENTIAL TRANSPERANCY
// let mult = (a, b) => {
// 	return a * b;
// }
// // Whithout referential transperancy
// let mult = (a, b) => {
// 	console.log(a)
// 	return a * b;
// }


// // FUNCTIONAL DECOMPOSITION TECHNIQUE
// // Normal function
// let sum3 = (a, b, c) => {
// 	return a + b + c;
// }; 
// // Decompostion function
// let sum3Decomposition = function(a) {
// 	return function(b) {
// 		return function(c) {
// 			return a + b + c;
// 		}
// 	}
// }

// console.log(sum3(1, 2, 3));
// // Same as
// console.log(sum3Decomposition(1)(2)(3));

// // Example for decomposition of the nested functions
// let sum3Decomposition = function(a) {
// 	return function(b) {
// 		return function(c) {
// 			return a + b + c;
// 		}
// 	}
// }

// // Same as
// let sum3Decomposition = (a) => {
// 	return (b) => {
// 		return (c) => {
// 			return a + b + c;
// 		}
// 	}
// }

// // Same as (it is used in REACT):
// let sum3Decomposition = (a) => (b) => (c) => {
// 	return a + b + c;
// }

// // Returns the function(b)
// let sum3b = sum3Decomposition(1);

// // Returns the function(c)
// let sum3c = sum3b(2);

// // Returns the expression in function(c)
// let result = sum3c(3);

// console.log(result)


// // PARTIAL APPLICATION
let pow = (power, x) => {
	return x ** power;
}

// Bind the power
let sqr = pow.bind(null, 2);

console.log(pow(2,2));
console.log(pow(2,4));
console.log(pow(2,6));

console.log(sqr(2));
console.log(sqr(4));
console.log(sqr(6));