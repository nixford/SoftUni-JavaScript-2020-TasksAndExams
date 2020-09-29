// 01. Rectangle

class Rectangle{
    constructor(width, height, color){
        this.width = width,
        this.height = height,
        this.color = color
    }

    calcArea(){
        return this.width * this.height;
    } 
}


// 02. Score to HTML

function scoreToHTML(input){

    let arr = JSON.parse(input);

    let result = "<table>\n";
    result += "  <tr><th>name</th><th>score</th></tr>\n";    

    for (let obj of arr) {
        result += `  <tr><td>${htmlEscape(obj['name'])}</td><td>${obj['score']}</td></tr>\n`;
    }

    return result + "</table>";

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}


// 03. Count Words in a Text

function CountWordsInAText(input){

    let result = {};
    for (const str of input) {
        let matches = str.match(/\w+/g);
        for (const word of matches) {
            if (result[word]) {
                result[word]++;
            } else {
                result[word] = 1;
            }
        }
    }

    return JSON.stringify(result);
}


// 04. City Markets

function cityMarkets(input){

    let obj = {};

    for (let i = 0; i < input.length; i++) {
        
        let [town, product, amountOfSales, priceForOneUnit] = input[i].split(/ -> | : /);

        if (!obj.hasOwnProperty(town)) {
            
            obj[town] = {};
        }

        if (!obj[town][product]) {
                
            //obj[town].push(product);
            obj[town][product] = 0;            
        }        
        obj[town][product] += Number(amountOfSales) * Number(priceForOneUnit);        
    }

    let result = '';
    for (const townName in obj) {
        result += `Town - ${townName}\n`;

        for (const productName in obj[townName]) {
            result += `$$$${productName} : ${obj[townName][productName]}\n`;
        }
    }

    console.log(result.trim());
}


// 05. Unity

class Rat{
    constructor(name){
        this.name = name,
        this.unitedRats = [];
    }
     
    unite(otherRat){        
        if (otherRat instanceof Rat) {            
            this.unitedRats.push(otherRat);
        }        
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let result = `${this.name}\n`;

        for (const rat of this.unitedRats) {
            result += `##${rat.name}\n`;
        }

        return result.trim();
    }
}


// 06. Usernames

function usernames(input){

    let unique = input.filter((item, i, ar) => ar.indexOf(item) === i);    
    unique.sort((a, b) => sortByLengthThenByNameCaseInsens(a, b));    
    function sortByLengthThenByNameCaseInsens(a, b) {
        return a.length - b.length || sortByName(a, b); 
    }
    function sortByName(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    } 

    console.log(unique.join('\n'));
}


// 07. Unique Sequences

function uniqueSequences(input){

    let arrays = new Map() // in order to use .has() function
    for (let i = 0; i < input.length; i++) {
        let currentArray = JSON.parse(input[i]).map(Number).sort((a,b) => b - a)
        // When received omle line elements, not separated in diferent elements (such as input[i])
        // we use map() functions which affect all elements and return the results
        let toAdd = currentArray.join(', ')
        if(!arrays.has(toAdd)){
            arrays.set(toAdd, currentArray.length)
        }
    }
    let result = Array.from(arrays.keys()).sort((a,b) => arrays.get(a) - arrays.get(b))
    result.forEach(a => console.log(`[${a}]`))

}


// 08. Cards

(() => {
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };

    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }
        set face(face) {
            if (!Faces.includes(face)) {
                throw new Error("Invalid card face: " + face);
            }
            this._face = face;
        }

        get suit() {
            return this._suit;
        }
        set suit(suit) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suit: " + suit);
            }
            this._suit = suit;
        }

        toString() {
            return `${this.face}${this.suit}`;
        }
    }
    return {
        Suits,
        Card
    };
})();


// 09. Instance Validation

class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let pattern = /^[0-9]{6}$/gim;

        if (!pattern.test(value)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let pattern = /^[a-zA-Z+_.]+@[a-zA-Z.]+$/gim;

        if (!pattern.test(value)) {
            throw new TypeError("Invalid e-mail");
        }

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this.checkName(value, "First");
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this.checkName(value, "Last");
        this._lastName = value;
    }

    checkName(value, item) {
        let pattern = /^[a-zA-Z]+$/gim;

        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`${item} name must be between 3 and 20 characters long`);
        } else if (!pattern.test(value)) {
            throw new TypeError(`${item} name must contain only Latin characters`);
        }
    }
}


// 10. Extensible Class

(() => {
    let counter = 0;
    return class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }
        extend(template) {
            for (let parentProp of Object.keys(template)) {
                if (typeof (template[parentProp]) == "function") {
                    Object.getPrototypeOf(this)[parentProp] = template[parentProp];
                } else {
                    this[parentProp] = template[parentProp];
                }
            }
        }
    }
})();


// 11. Arena Tier

function solve(input) {
    let gladiators = new Map();

    for (const line of input) {
        if (line == "Ave Cesar") {
            break;
        }

        let items = line.split(" -> ");

        if (items.length > 2) {
            let [gladiator, technique, skill] = [items[0], items[1], Number(items[2])];

            if (!gladiators.get(gladiator)) {
                gladiators.set(gladiator, new Map());
            }
            if (!gladiators.get(gladiator).get(technique)) {
                gladiators.get(gladiator).set(technique, 0);
            }
            if (gladiators.get(gladiator).get(technique) < skill) {
                gladiators.get(gladiator).set(technique, skill);
            }
        } else {
            items = line.split(" vs ");
            let [gladiator1, gladiator2] = [items[0], items[1]];

            if (gladiators.get(gladiator1) && gladiators.get(gladiator2)) {
                let targetTechnique = [...gladiators.get(gladiator1)]
                    .map(i => i[0])
                    .find(item => [...gladiators.get(gladiator2)]
                        .map(i => i[0])
                        .includes(item));

                if (targetTechnique) {
                    let gladiator1Points = gladiators.get(gladiator1).get(targetTechnique);
                    let gladiator2Points = gladiators.get(gladiator2).get(targetTechnique);

                    if (gladiator1Points > gladiator2Points) {
                        gladiators.delete(gladiator2);
                    } else {
                        gladiators.delete(gladiator1);
                    }
                }
            }
        }
    }

    let result = [...gladiators]
        .filter(x => [...x[1]]
            .reduce((tot, arr) =>
                tot + arr[1], 0) > 0)
        .sort((a, b) => [...b[1]]
            .reduce((tot, arr) =>
                tot + arr[1], 0
            ) - [...a[1]]
            .reduce((tot, arr) =>
                tot + arr[1], 0) ||
            a[0].localeCompare(b[0]));

    for (const gladiator of result) {
        console.log(`${gladiator[0]}: ${[...gladiator[1]].reduce((tot, arr) => tot + arr[1], 0)} skill`);

        for (const item of [...gladiator[1]].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) {
            console.log(`- ${item[0]} <!> ${item[1]}`);
        }
    }
}


// 12. Game Of Epicness

function printWinningKingdom(inputGenerals, battles) {
    let kingdoms = getKingdoms();

    for (let i = 0; i < battles.length; i++) {
        let attacker = getGeneral(battles[i][0], battles[i][1]);
        let defender = getGeneral(battles[i][2], battles[i][3]);

        if (attacker === null || defender === null ||
            attacker.kingdom === defender.kingdom ||
            attacker.army === defender.army) {
            continue;
        }

        if (attacker.army > defender.army) {
            attacker.wins++;
            attacker.army = Math.floor(attacker.army * 1.10);
            defender.loses++;
            defender.army = Math.floor(defender.army * 0.90);
        } else {
            defender.wins++;
            defender.army = Math.floor(defender.army * 1.10);
            attacker.loses++;
            attacker.army = Math.floor(attacker.army * 0.90);
        }
    }

    let [winningKingdom, winningGenerals] = [...kingdoms]
    .sort((a, b) => {

        let secondWins = b[1].map(g => g.wins).reduce((g1, g2) => g1 + g2);
        let firstWins = a[1].map(g => g.wins).reduce((g1, g2) => g1 + g2);
        let winsDiff = secondWins - firstWins;

        if (winsDiff !== 0) {
            return winsDiff;
        }

        // Kingdom Loses Ascending
        let firstLosses = a[1].map(g => g.loses).reduce((g1, g2) => g1 + g2);
        let secondLosses = b[1].map(g => g.loses).reduce((g1, g2) => g1 + g2);
        let lossesDif = firstLosses - secondLosses;

        if (lossesDif !== 0) {
            return lossesDif
        }

        return a[0].localeCompare(b[0]);
    })[0]

    let result = `Winner: ${winningKingdom}\n`;
    for (const g of winningGenerals.sort((a, b) => b.army - a.army)) {
        result += `/\\general: ${g.general}\n` +
            `---army: ${g.army}\n` +
            `---wins: ${g.wins}\n` +
            `---losses: ${g.loses}\n`;
    }

    console.log(result.trim());

    function getGeneral(kingdomName, generalName) {
        let currentKingdom = kingdoms.get(kingdomName);
        if (!currentKingdom) {
            return null;
        }

        let general = currentKingdom.filter(g => g.general === generalName);
        if (general.length === 0) {
            return null
        }

        return general[0];
    }

    function getKingdoms() {
        let kingdoms = new Map();

        for (const line of inputGenerals) {
            let currentKingdom = kingdoms.get(line.kingdom);
            if (!currentKingdom) {
                kingdoms.set(line.kingdom, []);
                currentKingdom = kingdoms.get(line.kingdom);
            }

            let currentGeneral = currentKingdom.filter(g => g.general === line.general)[0];
            if (!currentGeneral) {
                currentGeneral = {
                    general: line.general,
                    army: line.army,
                    kingdom: line.kingdom,
                    wins: 0,
                    loses: 0
                }

                currentKingdom.push(currentGeneral);
            } else {
                currentGeneral.army += line.army;
            }
        }

        return kingdoms;
    }
}


// 13. Kitchen

class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = [];
        this.productsInStock = [];
        this.actionsHistory = [];
    }

    loadProducts([...products]) {
        for (const currentProduct of products) {
            let items = currentProduct.split(" ");
            let [name, quantity, price] = [items[0], Number(items[1]), Number(items[2])];

            if (this.budget - price >= 0) {
                if (this.productsInStock[name]) {
                    this.productsInStock[name] += quantity;
                } else {
                    this.productsInStock[name] = quantity;
                }

                this.budget -= price;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.actionsHistory.join("\n").trim();
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        this.menu[meal] = {
            products: neededProducts,
            price: Number(price)
        };

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        let result = [];

        for (const key of Object.keys(this.menu)) {
            result.push(`${key} - $ ${this.menu[key].price}`);
        }

        if (result.length === 0) {
            return "Our menu is not ready yet, please come later...";
        }

        return result.join("\n") + '\n';
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let neededProducts = this.menu[meal].products;

        for (const line of neededProducts) {
            let items = line.split(" ");
            let [name, quantity] = [items[0], Number(items[1])];

            if (this.productsInStock[name] < quantity || !this.productsInStock[name]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (const line of neededProducts) {
            let items = line.split(" ");
            let [name, quantity] = [items[0], Number(items[1])];

            this.productsInStock[name] -= quantity;
        }

        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}
