// 01. String Length

function stringLength(textOne, textTwo, textThree){
    let sumLength;
    let averageLength;

    let firstArgLength = textOne.length;
    let secondArgLength = textTwo.length;
    let thirdArgLength = textThree.length;

    sumLength = firstArgLength + secondArgLength + thirdArgLength;
    averageLength = Math.floor(sumLength / 3);
    
    console.log(sumLength);
    console.log(averageLength);
}

// 02. Math Operations

function solve(num1, num2, operator){
    let result;
    switch (operator){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}

// 03. Sum of Numbers N…M

function solveTwo(num1Text, num2Text){

    let num1 = Number(num1Text);
    let num2 = Number(num2Text);

    let result = 0;

    for (let i = num1; i <= num2; i++) {

        result += i;        
    }

    return result;
}

// 04. Largest Number

function getBiggestNum(...numbers){

    let maxNumber = Math.max(...numbers);

    console.log(`The largest number is ${maxNumber}.`);

}

// 05. Circle Area

function checkAndCalculate(input){

    let result;
    let typeOfInput = typeof(input);

    if (typeOfInput === 'number') {        
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else{                
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}

// 06. Square of Stars

function squareOfStars(num){

    if(typeof(num) !== 'number'){

        num = 5;
    }

    let output = '';

    for (let i = 0; i < num; i++) {
        
        for (let j = 0; j < num; j++) {

            output += '* ';            
        }        
        console.log(output);
        output = '';
    }
}

// 07. Day of Week

function dayOfWeek(day) {
    switch (day) {
        case "Monday": console.log(1); break;
        case "Tuesday": console.log(2); break;
        case "Wednesday": console.log(3); break;
        case "Thursday": console.log(4); break;
        case "Friday": console.log(5); break;
        case "Saturday": console.log(6); break;
        case "Sunday": console.log(7); break;
        default: console.log("error");
    }
}

// 08. Aggregate Elements

function aggregateElements(numbers){

    // console.log(numbers.reduce((a, b) => a + b));
    let sum = 0;
    let sumInversed = 0;
    let concated = "";

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        sumInversed += 1 / numbers[i];
        concated += String(numbers[i]);
    }

    console.log(sum);
    console.log(sumInversed);
    console.log(concated);
}

// 09. * Words Uppercase

function wordsToUppercase(input){

    console.log(input.replace(/[^a-zA-Z0-9]/g, " ")
        .toUpperCase().split(" ").filter(x => x.length > 0)
        .join(', '));
}

wordsToUppercase('Hi, how are you?');