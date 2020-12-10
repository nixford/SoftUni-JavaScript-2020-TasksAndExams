function solveClasses() {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.problems = [];
        }

        toString() {
            return `${this.firstName} ${this.lastName} is part of SoftUni community now!`;
        }
    }

    class Teacher extends Person {
        constructor(firstName, lastName) {
            super(firstName, lastName);
        }

        createProblem(id, difficulty) {

            let currProblem = {
                id,
                difficulty,
            };

            this.problems.push(currProblem);

            return this.problems.join(',');
        }

        getProblems() {
            return this.problems;
        }

        showProblemSolution(id) {

            let currProblem = this.problems.find(p => p.id === id);

            if (currProblem === undefined) {
                throw new Error(`Problem with id ${id} not found.`);
            }

            currProblem.difficulty--;

            this.problems[currProblem] = currProblem;

            return currProblem;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, graduationCredits, problems) {
            super(firstName, lastName, problems);
            this.graduationCredits = graduationCredits;
            this.myCredits = 0;
            this.solvedProblems = [];
        }

        solveProblem(id) {
            let currProblem = this.problems.find(p => p.id === id);

            if (currProblem === undefined) {
                throw new Error(`Problem with id ${id} not found.`);
            }

            if (!this.solvedProblems.find(p => p.id === currProblem.id)) {
                this.myCredits += currProblem.difficulty;

            }

            this.solvedProblems.push(currProblem);

            return this.myCredits;
        }

        graduate() {
            if (this.myCredits >= this.graduationCredits) {
                return `${this.firstName} ${this.lastName} has graduated succesfully."`;
            }
            return `${this.firstName} ${this.lastName}, you need ${this.graduationCredits - this.myCredits} credits to graduate.`;

        }

    }
    return {
        Person,
        Teacher,
        Student
    }

}

// zero test 

const classes = solveClasses();
const teacher = new classes.Teacher("Ivailo", "Papazov");

teacher.createProblem('111', 5);
teacher.createProblem('444', 6);
const expectedProbelmsArray = [{id: '111', difficulty: 5}, {id: '444', difficulty: 6}]
expect(teacher.problems).to.deep.equal(expectedProbelmsArray)

teacher.showProblemSolution('111');
teacher.showProblemSolution('444');
teacher.showProblemSolution('444');

const expectedOutput = [{id: '111', difficulty: 4}, {id: '444', difficulty: 4}]
expect(teacher.problems).to.deep.equal(expectedOutput);
