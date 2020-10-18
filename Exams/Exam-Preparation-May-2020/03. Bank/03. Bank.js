class Bank {
    constructor (bankName){
        this._bankName = bankName, // We can use and #
        this.allCustomers = []
    }

    newCustomer (customer){
        if (this.allCustomers.find(c => c.personalId == customer.personalId) !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0; 
        // Implementing property totalMoney in order to avoided additional 
        // checks and adding of that property in depositMoney
        customer.transactions = [];
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney (personalId, amount) {        
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);
        
        if (currCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }        
        currCustomer.totalMoney += amount;
        currCustomer.transactions
            .unshift(`${currCustomer.transactions.length + 1}. ${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${amount}$!`);
        return `${currCustomer.totalMoney}$`;
    }

    withdrawMoney (personalId, amount) {
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);
        
        if (currCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }
        
        if (currCustomer.totalMoney < amount) {
            throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        currCustomer.totalMoney -= amount;
        currCustomer.transactions
            .unshift(`${currCustomer.transactions.length + 1}. ${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`);

        return `${currCustomer.totalMoney}$`;
    }

    customerInfo (personalId) {
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);
        
        if (currCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
            return [
                `Bank name: ${this._bankName},
                Customer name: ${currCustomer.firstName} ${currCustomer.lastName},
                Customer ID: ${personalId},
                Total Money: ${currCustomer.totalMoney}$,
                Transactions:`
            ].concat(currCustomer.transactions).join('\n');
        }        
    }
}


let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
