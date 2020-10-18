// 01. Add

function solution(num){
    return function(x){
        return num + x;
    };
}


// 02. Currency Format

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function result(currencyFormatter) {
    let separator = ",";
    let symbol = "$";
    let symbolFirst = true;

    let dollarFormatter = value => currencyFormatter(separator, symbol, symbolFirst, value);
    // to return another function that takes only one parameter 
    // and fix the rest of the parameters
    return dollarFormatter;
}


// 03. Filter Employees

function solve(...jsonInput){

    let arrObj = JSON.parse(jsonInput[0]);
    let criteria = jsonInput[1];   
    let count = 0;
    
    arrObj.forEach(currObj => {
        
        let {first_name, last_name, email} = currObj;
        
        if (criteria === 'all') {
            console.log(`${count++}. ${first_name} ${last_name} - ${email}`);
        } else {
            let criteries = criteria.split('-');            
            let criteriaValue = criteries[1];

            if (Object.values(currObj).indexOf(criteriaValue) > -1) {
                console.log(`${count++}. ${first_name} ${last_name} - ${email}`);
            }
        }        
    });
}


// 04. Command Processor

function solution() {
    return function () {
        let result = "";

        return {
            append: (text) => result += text,
            removeStart: (num) => result = result.slice(Number(num)),
            removeEnd: (num) => result = result.slice(0, result.length - Number(num)),
            print: () => console.log(result)
        }
    }(); // return the requested function
}





