function solveClasses(){
    class Hall{
        constructor(capacity, name){
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title){
            if (!this.events.includes(title)) {
                this.events.push(title);
                return "Event is added.".trim();
            } else {
                throw new Error("This event is already added!".trim());
            }
        }

        close(){
            this.events = [];
            return `${this.name} hall is closed.`.trim();
        }

        toString(){
            let result = [];
            if (this.events.length > 0) {
                result = [
                    `${this.name} hall - ${this.capacity}`,
                    `Events: ${this.events.join(', ')}`,
                ].join('\n');
            } else {
                result = `${this.name} hall - ${this.capacity}\n`;
            }
            return result.trim();
        }
    }

    class MovieTheater extends Hall{
        constructor(capacity, name, screenSize){
            super(capacity, name);
            this.events = [];
            this.screenSize = screenSize;            
        }

        close(){
            return `${super.solve()}Аll screenings are over.`.trim();
        }

        toString(){
            let result = [];
            result = [
                `${super.toString()}`,
                `${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`,
            ].join('\n');
            return result.trim();
        }
    }

    class ConcertHall extends Hall{
        constructor(capacity, name){
            super(capacity, name);
            this.events = [];            
        }

        hallEvent(title, performers){ 
            this.performers = [];   
            let result = super.hallEvent(title);
            this.performers = performers;      
            return result.trim();
        }

        close(){
            return `${super.close()}Аll performances are over.`.trim();
        }

        toString(){
            let result = [];
            if (this.events.length > 0) {
                result = [
                    `${super.toString()}`,
                    `Performers: ${this.performers.join(', ')}.`,
                ].join('\n');
            } else {
                result = `${super.toString()}`;
            }
            return result.trim();
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}

let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close()); 

let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick')); 
console.log(movieHall.toString());

let concert = new classes.ConcertHall(5000, 'Diamond');        
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));  
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
