// 01. Person and Teacher

function personAndTeacher(){
    class Person{
        constructor(name, email){
            this.name = name,
            this.email = email
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }

    return {Person, Teacher};
}


// 02. Inheriting and Replacing ToString

function personAndTeacher(){
    class Person{
        constructor(name, email){
            this.name = name,
            this.email = email
        }

        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email),
            this.subject = subject
        }

        toString(){
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email),
            this.course = course
        }

        toString(){
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
    }

    return {Person, Teacher, Student};
}


// 03. Extend Prototype

function extendPrototype(Class) {    
    Class.prototype.species = "Human"
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}


// 04. Class Hierarchy

function solution(){

    class Figure{
        constructor(units = 'cm'){            
            this.units = units;          
        }

        changeUnits(newUnits){
            this.units = newUnits;
        }        

        transformMetric(valInCM){
            return this.units === 'm' ? 
                valInCM / 100 : this.units === 'mm' ? 
                    valInCM * 10 : valInCM;
        }

        get area() {
            throw new Error('Not Implemented!');
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area}`;
        }
    }

    class Circle extends Figure{
        constructor(radius, units){
            super(units);
            this.radius = radius;
        }

        get area() {
            const radius = this.transformMetric(this.radius);
            return Math.PI * radius * radius;
        }

        toString() {
            const r = this.transformMetric(this.radius);
            return `${super.toString()} - radius: ${r}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            const width = this.transformMetric(this.width);
            const height = this.transformMetric(this.height);
            return height * width;
        }

        toString(){
            const width = this.transformMetric(this.width);
            const height = this.transformMetric(this.height);
            return `${super.toString()} - width: ${width}, height: ${height}`
        }
    }
    return {Figure, Circle, Rectangle};
}


let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50


solution();

