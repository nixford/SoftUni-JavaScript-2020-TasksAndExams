// 01. Array Extension

(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
      return this.reduce((a, b) => a+b);
    };

    Array.prototype.average = function () {
      return this.sum()/this.length;
    }
})()


// 02. Balloons

function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight)
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: Number(ribbonLength)
            };

        }
        get ribbon(){
            return this._ribbon;
        }

    }
    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength,text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text=text;
        }
        get text(){
            return this._text;
        }
    }
    return{Balloon,PartyBalloon,BirthdayBalloon};
}


// 03. People


function solve() {
    class Employee{
        constructor(name,age){
            if(new.target === 'Employee'){
                throw new Error("Cannot instantiate directly.")
            }
            this.name=name;
            this.age=age;
            this.salary=0;
            this.tasks=[];
        }
        work(){
            let currentTask=this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }
        collectSalary(){
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
        getSalary(){
            return this.salary;
        }
    }
    class Junior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks.push(' is working on a simple task.');
        }
    }
    class Senior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }
    class Manager extends Employee{
        constructor(name,age){
            super(name,age);
            this.divident=0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');

        }
        getSalary(){
            return this.salary + this.divident;
        }
    }
    return{Employee,Junior,Senior,Manager}
}


// 04. Posts

function solve() {
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
        }
        toString(){

            return `Post: ${this.title}` + "\n" +`Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content, likes, dislikes){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
            this.comments=[];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            if(this.comments.length>0){
                let output= super.toString() +"\n" +`Rating: ${this.likes-this.dislikes}`+"\n";
                output+='Comments:';
                for(let comment of this.comments){
                    output+="\n"+` * ${comment}`;
                }
                return output;
            }else{
                let output= super.toString() +"\n" +`Rating: ${this.likes-this.dislikes}`;
                return output;
            }

        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this._views=Number(views);
        }
        get views(){
            return this._views;
        }        

        view(){
            this._views++;
            return this;
        }
        toString(){
            return super.toString()+`\nViews: ${this.views}`;
        }
    }
    return {Post,SocialMediaPost,BlogPost}
}


// 05. * Computer

function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw  new TypeError('Abstract class cannot be instantiated directly');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }
    class Laptop extends  Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            } else {
                throw new TypeError("it's not a battery!")
            }
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard,monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(value){
            if (value instanceof Keyboard) {
                this._keyboard = value;
            } else {
                throw new TypeError("it's not a keyboard!")
            }
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(value){
            if (value instanceof Monitor) {
                this._monitor = value;
            } else {
                throw new TypeError("it's not a monitor!")
            }
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


// 06. ** Mixins

function Mixins() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw  new TypeError('Abstract class cannot be instantiated directly');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }
    class Laptop extends  Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            } else {
                throw new TypeError("it's not a battery!")
            }
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard,monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(value){
            if (value instanceof Keyboard) {
                this._keyboard = value;
            } else {
                throw new TypeError("it's not a keyboard!")
            }
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(value){
            if (value instanceof Monitor) {
                this._monitor = value;
            } else {
                throw new TypeError("it's not a monitor!")
            }
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality=function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        classToExtend.prototype.isFast = function () {
            if (this.processorSpeed > this.ram / 4) {
                return true;
            } else {
                return false;
            }
        };
        classToExtend.prototype.isRoomy = function () {
            if (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)) {
                return true;
            } else {
                return false;
            }
        };
    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            if (this.keyboard.manufacturer === this.monitor.manufacturer) {
                return true;
            } else {
                return false;
            }
        };

        classToExtend.prototype.isClassy = function () {
            if (this.battery.expectedLife >= 3 &&
                (this.color === 'Silver' || this.color === 'Black') &&
                this.weight < 3) {
                return true;
            } else {
                return false;
            }
        }
    };
    return {
        computerQualityMixin,
        styleMixin
    }
}