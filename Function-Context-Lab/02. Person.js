class Person {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    set fullName(value){
        let pattern = /[A-Za-z]+\s[A-Za-z]+/;
        if (pattern.test(value)) {            
            let [fName, lName] = value.split(' ');

            this.firstName = fName;
            this.lastName = lName;
        }
    }
}