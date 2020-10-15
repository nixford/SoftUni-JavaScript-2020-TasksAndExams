// 01. Heroes

function solve() {
    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    })

    const canFight = (state) => ({

        fight: () => {
            console.log(`${state.name} slashes at the foe!`)
            state.stamina--;
        }
    })

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        }

        return Object.assign(state, canFight(state));
    }

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100
        }
        return Object.assign(state, canCast(state));
    }

    return {mage:mage,fighter: fighter};
}


// 02. Construction Crew

function solve(obj) {
    if (obj.dizziness) {
        obj.dizziness = false;
        let levelOfHydrated = obj.weight * obj.experience * 0.1;
        obj.levelOfHydrated += levelOfHydrated;
    }

    return obj;
}


// 03. Car Factory

function solve(obj) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let wheel = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;

    return {
        model: obj.model,
        engine: engines.filter(e => e.power >= obj.power)[0],
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: [wheel, wheel, wheel, wheel]
    }
}


// 04. Extensible Object

function solve() {
    let obj = {
        extend: function (other) {
            for (let prop of Object.keys(other)) {
                if (typeof(other[prop]) === 'function') {
                    Object.getPrototypeOf(obj)[prop] = other[prop];
                } else {
                    obj[prop] = other[prop];
                }
            }
        }
    };

    return obj;
}


// 05. String Extension

(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return `${str}${this.toString()}`;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return `${this.toString()}${str}`;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        if (this.toString().length === 0) {
            return true;
        }

        return false;
    };

    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return '.'.repeat(n);
        }

        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastSpaceIndex = this.toString().substr(0, n - 2).lastIndexOf(' ');
            if (lastSpaceIndex === -1) {
                return `${this.toString().substr(0, n - 3)}...`;
            } else {
                return `${this.toString().substr(0, lastSpaceIndex)}...`;
            }
        }
    };

    String.format = function (str, ...array) {
        for (let i = 0; i < array.length; i++) {
            let placeHolder = `{${i}}`;
            if (str.includes(placeHolder)) {
                str = str.replace(placeHolder, array[i]);
            }
        }

        return str.toString();
    };
})();

// let str = 'my string';
// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// console.log(str);
// str = String.format('jumps {0} {1}',
//   'dog');
// console.log(str);


// 06. * Sorted List

function solve() {
    let sortedList = (() => {
        let array = [];

        let add = function (element) {
            array.push(element);
            array.sort((a, b) => a - b);
            this.size++;
            return array;
        }

        let remove = function (index) {
            if (index >= 0 && index < array.length) {
                array.splice(index, 1);
                array.sort((a, b) => a - b);
                this.size--;
                return array;
            }
        }

        let get = function (index) {
            if (index >= 0 && index < array.length) {
                let item = array[index];
                return item;
            }
        }

        let size = 0;
        return { add, remove, get, size };
    })();

    return sortedList;
}




