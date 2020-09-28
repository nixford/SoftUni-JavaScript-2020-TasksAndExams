// 01. Heroic Inventory

function heroicInventory(input){
    let heroObj = {}; 
    let heroList = [];

    for (let i = 0; i < input.length; i++) {
        
        let [heroName, heroLevel, heroItems] = input[i].split(' / ');        
        heroItems ? heroItems = heroItems.split(', ') : heroItems = [];

        heroObj = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        };
        heroList.push(heroObj);
    }  
    console.log(JSON.stringify(heroList));
}


// 02. JSON's Table

function jsonTable(input){
    let output = '<table>\n';
     
    let employees = [];

    input.forEach(e => {
        employees.push(JSON.parse(e));
    })

    output += arrayAsTable(employees) + '</table>';

    function arrayAsTable(employees){
        let result = '';
    
        employees.forEach(employee => {
            result += '\t<tr>\n';
    
            Object.values(employee).forEach(v => {
                result += `\t\t<td>${v}</td>\n`
            })
    
            result += '\t</tr>\n';
        })
        return result;
    }

    console.log(output);
}


// 03. Cappy Juice

function cappyJuice(input){
    let obj = {};
    let output = {};

    for (let i = 0; i < input.length; i++) { 

        let [juceName, quantity] = input[i].split(' => ');
        if (obj.hasOwnProperty(juceName)) {         
            obj[juceName] += Number(quantity);
            if (obj[juceName] / 1000 >= 1) {

                output[juceName] = obj[juceName];
            }
        }
        else{
            obj[juceName] = Number(quantity);
            if (obj[juceName] / 1000 >= 1) {

                output[juceName] = Number(quantity);
            }
        }        
    }

    for (const juce in output) {
        console.log(`${juce} => ${Math.floor(output[juce] / 1000)}`);
    }
}


// 04. Store Catalogue

function storeCatalogue(input){    
    input = input.sort((a, b) => a.localeCompare(b));    
    let firstLetter = '';

    for (let i = 0; i < input.length; i++) {
        
        let [product, price] = input[i].split(' : ');        

        if (firstLetter != product[0]) {
            firstLetter = product[0];
            console.log(product[0]);
        }
        console.log(` ${product}: ${price}`);
        firstLetter = product[0];        
    }
}


// 05. Auto-Engineering Company

function autoEngineeringCompany(input){    
    
    let obj = {};
    let markCars = {};     

    for (let i = 0; i < input.length; i++) {

        let [carBrand, carModel, producedCar = []] = input[i].split(' | ');        

        if (!obj.hasOwnProperty(carBrand)) {            
            obj[carBrand] = [];            
        }
        if (!obj[carBrand].includes(carModel)) {
                
            obj[carBrand].push(carModel);            
        }
        if(!markCars.hasOwnProperty(carModel)){
            markCars[carModel] = 0;
        }
        markCars[carModel] += Number(producedCar);     
    }

    Object.keys(obj).forEach(element => {
        console.log(element);
        for(let i of obj[element]){
            console.log(`###${i} -> ${markCars[i]}`);
        }
    });
}


// 06. System Components

function systemComponents(input){
    let systems = new Map();

    for (const row of params) {
        let [name, component, subComponent] = row.split(' | ');

        if (!systems.get(name)) {
            systems.set(name, new Map());
        }

        let setOfSybcomponents = systems.get(name).get(component);
        if (!setOfSybcomponents) {
            systems.get(name).set(component, []);
            setOfSybcomponents = systems.get(name).get(component);
        }

        setOfSybcomponents.push(subComponent);
    }

    let ident = '|||';
    let sortSystems = (a, b) => (b[1].size - a[1].size !== 0) ? b[1].size - a[1].size 
        : a[0] < b[0] ? -1
            : a[0] > b[0] ? 1
                : 0;

    let result = [...systems]
        .sort((a, b) => sortSystems(a, b))
        .map(sys => sys[0]
            + '\n' + [...sys[1]]
                .sort((a, b) => b[1].length - a[1].length)
                .map(c => ident + c[0] + '\n' + ident + ident + c[1].join('\n' + ident + ident))
                .join('\n')
        )
        .join('\n');

    console.log(result.trim());
}


// 07. Data Class

class Request {
    constructor(method, 
                uri, 
                version, 
                message, 
                response = undefined, 
                fulfilled = false ) {
        [this.method, 
        this.uri, 
        this.version, 
        this.message, 
        this.response, 
        this.fulfilled] = [method, 
                          uri, 
                          version, 
                          message, 
                          response, 
                          fulfilled];
    }
}


// 08. Tickets

function tickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let item of array) {
        let parts = item.split('|').filter(x => x != '');
        let ticket = new Ticket(parts[0], Number(parts[1]), parts[2]);
        tickets.push(ticket);
    }

    switch (criterion) {
        case 'destination': return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price': return tickets.sort((a, b) => a.price - b.price);
        case 'status': return tickets.sort((a, b) => a.status.localeCompare(b.status));
    };
}


// 09. Sorted List

class SortedList {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(elemenent) {
        this.array.push(elemenent);
        this.array.sort((a, b) => a - b);
        this.size++;
        return this.array;
    }

    remove(index) {
        if (index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.array.sort((a, b) => a - b);
            this.size--;
            return this.array;
        }
    }

    get(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index]
        }
    }

    size() {
        return this.size;
    }
}

let sortedList = new SortedList();
sortedList.add(5);
sortedList.add(2);
sortedList.add(1);

sortedList.remove(2);
console.log(sortedList.get(1));
console.log(sortedList.size);

