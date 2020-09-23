function findMaxNumber(...numbers){
    let maxNumber = Math.max(...numbers);

    return maxNumber;
}

console.log(findMaxNumber(5, -3, 16));

function findMaxNumber(a, b, c){
    let maxNumber = Math.max(a, b, c);

    return maxNumber;
}

console.log(findMaxNumber(5, -3, 16));


let multiply1 = (a, b) => a * b;
console.log(multiply1(10, 10));

let multiply = function(a, b){
    return a * b;
}

let product = multiply(10, 10);
console.log(product);

function calc(a, b){
    let sum = a + b;

    return sum;
}

let resultFunc = calc(10, 50);
console.log(resultFunc);

console.log(Number('Pesho')); // NaN


let first = 5;
let second = '5';

console.log(first == second); // true
console.log(first != second); // false
console.log(first === second); // false
console.log(first !== second); // true

let a = 5;
let b = 5;

let c;

c = a ** b;

console.log(c); // 3125


let name = undefined;
console.log(name);

console.log('Hello world!');

var result = 5 + 5;

console.log(result);

// Ctr + ` or Ctr + F5

// Opening the code in the directory - cmd -> code .

let stringVar = 'some test';
let stringVar2 = "some text";

let numberVar = 10;
let numberVar2 = 3.14;

let boolean = true;
let boolean2 = false;

// let undefined = undefined;
let undefined2 = null;

console.log(Number('4'));
// console.log(+'4'));


// First-class Functions
let sum = (a, b) => a+b;

function calculate(operation, firstArgument, secondArgument){
    let operationResult = operation(firstArgument, secondArgument);

    return operationResult;
}

let resultNestedFunction = calculate(sum, 5, 10);

console.log(resultNestedFunction);


// Arrays
// let numArrayEmpty = [];

// let numArray = [10,1,4,1,5];

// console.log(numArray);


// For numbers
let numbers = [30,3,2,5,4,1,10,20];
function compareNumbers(a, b) {
    return a - b;
}

numbers.sort(compareNumbers);
console.log(numbers);

// For string
let names = ['Gosho', 'Pesho', 'Stamat', 'Gery', 'Ani'];

names.sort(function(a,b) {
    return a.localeCompare(b);
});

names.sort((a, b) => a.localeCompare(b));

console.log(names);