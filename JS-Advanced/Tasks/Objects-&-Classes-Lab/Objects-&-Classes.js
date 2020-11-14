// 01. Towns to JSON

function townsToJSON(towns) {

    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);        
        let townObj = { 
            Town: townName, 
            Latitude: Math.round((Number(lat) + Number.EPSILON) * 100) / 100, 
            Longitude: Math.round((Number(lng) + Number.EPSILON) * 100) / 100, 
        }        
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));;
}


// 02. Sum by Town

function sumByTown(arr){

    let obj = {}
    
    for (let i = 0; i < arr.length; i += 2) {

        if (obj.hasOwnProperty(arr[i])) { 

            obj[arr[i]] = obj[arr[i]] + Number(arr[i+1]);
        }
        else{
            obj[arr[i]] = Number(arr[i+1]);
        }
    }
    console.log(JSON.stringify(obj));
}


// 03. Population in Towns

function populationInTowns(stringArr){ 

        let total = new Map();

    for (let dataRow of stringArr) {

        let [town, population] = dataRow.split(/\s*<->\s*/); // Multiple separators in open / and closing / by using RegEx

        population = Number(population);

        if (total.has(town)) {
            total.set(town, total.get(town) + population);
        }
        else {
            total.set(town, population);
        }
    }
    for (let [town, sum] of total) {
        console.log(town + " : " + sum);    
    }
}


// 04. JSON to HTML Table

function jsonToHtmlTable(params){

    let escapedInput = str => str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    let ident = '   ';
    let table = `<table>\n${ident}<tr>`;
    let parsedObjects = JSON.parse(params);

    // Set Headers
    for (const key in parsedObjects[0]) {

        let thContent = Number.isFinite(key)
            ? key
            : escapedInput(key);

        table += `<th>${thContent}</th>`;
    }

    // Set Table Data
    for (let i = 0; i < parsedObjects.length; i++) {

        table += `</tr>\n${ident}<tr>`;

        for (const key in parsedObjects[0]) {

            let tdContent = Number.isFinite(parsedObjects[i][key])
                ? parsedObjects[i][key]
                : escapedInput(parsedObjects[i][key]);

            table += `<td>${tdContent}</td>`;
        }
    }

    table += '</tr>\n</table>';
    console.log(table);
    return table;    
}


// 05. Lowest Prices in Cities

function lowestPricesInCities(params){

    let stat = new Map();

    for (const row of params) {
        let [town, product, price] = row.split('|').map(e => e.trim());

        if (!stat.get(product)) {
            stat.set(product, new Map());
        }

        stat.get(product).set(town, Number(price));
    }

    let result = '';

    for (const kvp of stat) {
        let lowestPrice = [...kvp[1]].sort((a, b) => a[1] - b[1])[0];
        result += `${kvp[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})\n`;
    }

    console.log(result.trim());
}


// 06. Person

class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.email = email
    }

    toString(){

        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
};


// 07. Get Persons

function getPersons(){
    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email
        }
    
        toString(){
    
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    };

    let personArr = [];
    personArr.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));    
    personArr.push(new Person('SoftUni'));
    personArr.push(new Person('Stephan', 'Johnson', 25));
    personArr.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')); 

    return personArr;
}


// 08. Circle

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() { 
        return 2 * this.radius; 
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }
        
    get area() {
        return Math.PI * this.radius * this.radius;
    }        
}


// 09. Point Distance

class Point{
    constructor(x, y){
        this.x = x,
        this.y = y        
    }

    static distance(obj1, obj2) {
        return Math.sqrt(Math.pow((obj2.x - obj1.x), 2) + Math.pow((obj2.y - obj1.y), 2));
    }
}

