// 01. Company

class Company {
    constructor(){
       this.departments = [] 
    }

    addEmployee(username, salary, position, department){
        if (!username || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (salary < 0) {
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({username, salary, position});

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    };

    bestDepartment(){
        let departmentsOutput = {};
        Object.entries(this.departments).forEach(([department, employees]) => {

            let totalSalary = employees.map(e => e.salary).reduce((acc, curr) => acc += curr); 
            
            departmentsOutput[department] = totalSalary / employees.length;            
        });

        let maxSalary = 0;
        let bestDepartment;
        Object.entries(departmentsOutput).forEach(([department, avgSalary]) => {
            if (avgSalary > maxSalary) {
                maxSalary = avgSalary;
                bestDepartment = department;                
            }
        });

        let output =  `Best Department is: ${bestDepartment}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
        
        this.departments[bestDepartment]
        .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
        .forEach(e => {
            output += `${e.username} ${e.salary} ${e.position}\n`;
        });

        return output.trim();
    };
}
