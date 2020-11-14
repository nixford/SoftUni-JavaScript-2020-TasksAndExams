// 01. Order Rectangles

function orderRectangles(input) {
    let result = input.map(([width, height]) => ({
        width,
        height,
        area: () => width * height,
        compareTo(rect) {
            let result = rect.area() - this.area();

            return result == 0 
                ? rect.width - this.width 
                : result
        }
    }))
    .sort((a, b) => a.compareTo(b));

    return result;
}


// 02. List Processor

function listProcessor(input){
    let result = [];
    
    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(' ');        
        let [command, text] = row;
        if (command === 'add') {
            result.push(text);
        } else if (command === 'remove') {
            result = result.filter(i => i !== text);
        } else if (command === 'print') {
            console.log(result.join(','));
        }        
    } 
}


// 03. Object Factory

function objectFactory(input) {
    let objects = JSON.parse(input);    
    let result = objects.reduce((a, x) => ({...a, ...x}), {});
    // let result = objects.reduce((a, x) => Object.assign(a, x), {});
    console.log(result);
}


// 04. Cars

let objCreator = (function () {
    let objects = [];

    let creator = {
        create: (name)=> {
            objects[name] = {};
        },
        inherit: (name, parentName) => {
            // objects[name] = Object.create(objects[parentName], {name : {value : name}});
            objects[name] = Object.create(objects[parentName]);
        },
        set: (name, key, value)=> {
            objects[name][key] = value;
        },
        print: (name)=> {
            let output = [];
            for(let prop in objects[name]){
                output.push(`${prop}:${objects[name][prop]}`);
            }
            console.log(output.join(', '));
        }
    };

    return function (arr) {
        arr.forEach(e=> {
            let tokens = e.split(' ');
            if (tokens[2] == 'inherit') {
                creator[tokens[2]](tokens[1], tokens[3]);
            } else {
                creator[tokens[0]](tokens[1], tokens[2], tokens[3])
            }

        })
    }

})();
