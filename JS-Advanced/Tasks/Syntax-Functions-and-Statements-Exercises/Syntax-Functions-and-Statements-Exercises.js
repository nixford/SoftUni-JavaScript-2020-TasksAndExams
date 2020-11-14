// 01. Fruit

function fruit(frootType, weight, pricePerKilo){

        console.log(`I need $${((weight / 1000) * pricePerKilo).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${frootType}.`);
}

// 02. Greatest Common Divisor – GCD

function GCD(x, y){

    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        let t = y;
        y = x % y;
        x = t;
  }
  console.log(x);

}

// 03. Same Numbers

function sameNumbers(num){

    let allAreEqual = true;
    let sum = 0;

    while(num > 0) {

        let currDigit = num % 10;
        num = Math.floor(num / 10);
        
        sum += currDigit;

        if(currDigit != num % 10 && num % 10 != 0){

            allAreEqual = false;
        }
    }

    console.log(allAreEqual);
    console.log(sum);
}

// 04. Time to Walk

function timeToWalk(steps, length, speed){

    let stepsNumber = Number(steps);
    let stepsMetersHr = Number(length);
    let studentSpeed = Number(speed);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + 
    (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + 
    (timeSec < 10 ? "0" : "") + timeSec);
}

// 05. Road Radar

function roadRadar(params){
    
    let speed = Number(params[0]);
    let areaType = params[1];

    if(areaType == 'city'){

        let speedLimit = 50;
        newFunction(speedLimit);        
    }
    else if(areaType == 'residential'){

        let speedLimit = 20;
        newFunction(speedLimit);            
    } 
    else if(areaType == 'interstate'){

        let speedLimit = 90;
        newFunction(speedLimit);            
    }
    else if(areaType == 'motorway'){

        let speedLimit = 130;
        newFunction(speedLimit);            
    } 

    function newFunction(speedLimit) {
        if (speed > speedLimit && speed <= speedLimit + 20) {

            console.log('speeding');
        }
        else if (speed > speedLimit + 20 && speed <= speedLimit + 40) {

            console.log('excessive speeding');
        }
        else if(speed > speedLimit + 40) {

            console.log('reckless driving');
        }
    }    
}

// 06. Cooking by Numbers

function cookingByNumbers(elements){

    let number = Number(elements[0]);

    for (let i = 1; i < elements.length; i++) {
       
        if(elements[i] == 'chop'){
            
            console.log(number  /= 2);
        }
        else if (elements[i] == 'dice') {
            
            console.log(number = Math.sqrt(number));
        }
        else if (elements[i] == 'spice') {
            
            console.log((number += 1));
        }
        else if (elements[i] == 'bake') {
            
            console.log(number *= 3);
        }
        else if (elements[i] == 'fillet') {
            
            console.log(number -= number * 0.20);
        }
    }
}

// 07. Validity Checker

function validityChecker(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    let distance1 = Math.sqrt(x1 * x1 + y1 * y1);
    let distance2 = Math.sqrt(x2 * x2 + y2 * y2);
    let distance3 = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2));

    if (Number.isInteger(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } 
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } 
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } 
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// 08. * Calorie Object

function solve(array) {
    let result = [];
    let pattern = "";

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (i % 2 == 0) {
            pattern += element + ": ";
        }
        else {
            pattern += Number(element);
            result.push(pattern);
            pattern = "";
        }
    }

    console.log(`{ ${result.join(', ')} }`);
}

