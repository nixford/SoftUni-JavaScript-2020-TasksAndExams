// 01. Object Composition - Objects Holding Other Objects

let person = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 22,
    grades: [2, 4, 2, 6],
    school: {
        name: '51-SOU',
        maxgGrade: 12,
        address: 'str...'
    },
    reportGrades: function () {
        console.log(`My grades are: ${this.grades.join(', ')}`);
    }
}
person.location = {
    lat: 48.22,
    lgn: 23.32
} // creates another property


// 02.Destructuring of Arrays:

let names = ['Pesho', 'Ivan', 'Mariya'];
let [firstName, secondName] = names;
console.log(firstName); // Pesho
console.log(secondName); // Ivan

// let names = ['Pesho', 'Ivan', 'Mariya'];
let [firstName, ...others] = names;
console.log(firstName); // Pesho
console.log(others); // arr which includes the rest of the names ['Ivan', 'Mariya']

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
 let [ [firstElement, secondElement], secondRow ] = matrix ;
 console.log(firstElement);


 // 03.Destructuring of Objects:

let { lastName, school } = person;
console.log(school.name);

let { lastName, school, ...others } = person;
console.log(school.name);

let { lastName : familyName, school, ...others } = person;

let { school:  {name} } = person;
console.log(name);


// 04.Aggregation of several properties to one array/object

let students = [
    { name: 'Pesho', score: 1 },
    { name: 'Pesho', score: 1 },
    { name: 'Pesho', score: 1 },
    { name: 'Pesho', score: 1 },
    { name: 'Pesho', score: 1 },
    { name: 'Pesho', score: 1 },
];

function aggregate(acc, currentStudent){
    let student = acc.find(x => x.name == currentStudent.name);

    if (student) {
        student.score += currentStudent.score;
    } else {
        acc.push(currentStudent);
    }

    return acc;
}

let result = students.reduce(aggregate, []);

// 06. Concatenation

const objs = [
    {name: 'Peter',age:35 }, 
       { age: 22 },
       {name: "Steven"}, 
       {height:180}
];
const concatenate = (a, o) => ({...a, ...o});
const c = objs.reduce(concatenate, {});
console.log(c);// { name: 'Steven', age: 22, height: 180 }
