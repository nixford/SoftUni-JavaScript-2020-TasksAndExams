// 01. Sort Array

function sortArray(arr, orderType) {
    return arr.sort((a, b) => orderType == "asc" ? a - b : b - a); 
}


// 02. Argument Info

function argumentInfo(...input){
    let obj = {};
    let data = new Map();    

    input.forEach(item => {        
        let currType = typeof item;        
        obj[currType] = item;
        console.log(`${currType}: ${obj[currType]}`);

        if (!data.get(currType)) {
            data.set(currType, 0);
        }
        data.set(currType, data.get(currType) + 1);
    }); 

    [...data].sort((a, b) => b[1] - a[1])
        .forEach(md => {
            console.log(`${md[0]} = ${md[1]}`);
        });
}


// 03. Personal BMI

function personalBMI(name, age, weight, heightCm){
    const output = {
        name,
        personalInfo: {
            age,
            weight,
            height: heightCm
        },        
    };
    const heightInM = heightCm / 100;
    let bmi = Math.round(weight / (heightCm / 100) / (heightCm / 100));
    output['BMI'] = bmi;

    let status = (output.BMI < 18.5) ? 'underweight' :
        (output.BMI < 25) ? 'normal' :
        (output.BMI < 30) ? 'overweight' :
        'obese';

    output.status = status;
    if (output.BMI >= 30) {
        output.recommendation = 'admission required';
       }

    output['status'] = status;
    
    return output;
}


// 04. Vector Math

(function vectorMath(){

    function add (v1, v2){
        return [v1[0] + v2[0], v1[1] + v2[1]];
    }

    function multiply(v1, s){
        return [v1[0] * s, v1[1] * s];
    }

    function length(v1){
        return Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]);
    }

    function dot(v1, v2){
        return v1[0] * v2[0] + v1[1] * v2[1];
    }

    function cross(v1, v2){
        return v1[0] * v2[1] - v1[1] * v2[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross,
    } 
});   
// the function vectorMath returns the other functions as an object (literal)  
// we can use them as follows:
// const vectorMath = vectorMath();
// vectorMath.add(a, b);
(function () {
    return {
        add: (v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]],
        multiply: (v1, num) => [v1[0] * num, v1[1] * num],
        length: (v1) => Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]),
        dot: (v1, v2) => v1[0] * v2[0] + v1[1] * v2[1],
        cross: (v1, v2) => v1[0] * v2[1] - v1[1] * v2[0]
    }
}());


// 05. Breakfast Robot

function breakfastRobot(){
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour'] // key which helps to order the elements
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        },
    }

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavor: 0,
    }

    let operations = {
        restock,
        prepare,
        report
    };

    function restock(element, qty){
        microelements[element] += qty;
        return 'Success';
    }

    function prepare(recipe, qty){
        const required = Object.assign({}, recipes[recipe]); 
        // Object.assign() creates copy to the object (not referention)
        required.order.forEach(key => required[key] *= qty);           

        for (let element of required.order) { 
            // key which helps to order the elements
            if (microelements[element] < required[element]) {
                return `Error: not enough ${element} in stock`;
            }
        }

        required.order.forEach(key => microelements[key] -= required[key]); 

        return 'Success';
    } 

    function report(){
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavor}`;
    }

    function manager(command){
        const tokens = command.split(' ');
        return operations[tokens[0]](tokens[1], Number(tokens[2]));
    }
     
    return manager;
}


// 06. * Functional Sum

let add = (function add() {
    let sum = 0;
    return function add(num) {
        sum += num;
        add.toString = function () {
            return sum;
        }
        return add;
    }
}()); // function return itself with an updated context.


// 07. ** Monkey Patcher

let monkeyPatcher = (function () {
    let commands = {
        upvote: (object) => object['upvotes'] += 1,
        downvote: (object) => object['downvotes'] += 1,
        score: (object) => {
            "use strict";
            let upVotes = object['upvotes'];
            let downVotes = object['downvotes'];
            let result = [];
            let obfuscationNumber = 0;
            let maxVotes;

            if ((upVotes + downVotes) > 50) {
                maxVotes = Math.max(upVotes, downVotes);
                obfuscationNumber = Math.ceil(0.25 * maxVotes);
            }

            result.push(upVotes + obfuscationNumber);
            result.push(downVotes + obfuscationNumber);
            result.push(upVotes - downVotes);
            let rating = getRating(object);
            result.push(rating);

            return result;
        },
        call: (object, args) => {
            return commands[args](object);
        }
    };
    return commands;

    function getRating(object) {
        let upVotes = object['upvotes'];
        let downVotes = object['downvotes'];
        let totalVotes = upVotes + downVotes;
        let balance = upVotes - downVotes;

        if (totalVotes < 10) {
            return 'new';
        }

        if ((upVotes / totalVotes) > 0.66) {
            return 'hot';
        }

        if ((downVotes / totalVotes <= 0.66) && balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            return 'controversial';
        }

        if (balance < 0 && totalVotes >= 10) {
            return 'unpopular';
        }

        return 'new';
    }
})();


