class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = Number(budget);
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        let currentKid = `${name}-${budget}`;

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        if (this.kids[grade].some(x => x.split('-')[0] === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        } else {
            this.kids[grade].push(currentKid);
            return this.kids[grade];
        }
    }

    removeChild(name, grade) {

        if (this.kids.hasOwnProperty(grade)) {
            let indexOfKid = this.kids[grade].findIndex(x => x.startsWith(name));

            if (indexOfKid !== -1) {
                this.kids[grade].splice(indexOfKid, 1);
                return this.kids[grade];
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        let sortedGrades = Object.keys(this.kids).sort((a, b) => a - b);

        for (const grade in sortedGrades) {
            let currentGrade = sortedGrades[grade];
            result += `Grade: ${currentGrade}\n`;
            let kidsCounter = 1;

            for (const kid of this.kids[currentGrade]) {
                result += `${kidsCounter}. ${kid}\n`;
                kidsCounter++;
            }
        }

        return result.trim();
    }

    get numberOfChildren() {
        let number = 0;

        for (const n in this.kids) {
            number += this.kids[n].length;
        }

        return number;
    }
}