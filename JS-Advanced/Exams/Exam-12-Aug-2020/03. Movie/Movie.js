class Movie {
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = []; 
        this.totalMovieInfo = [];
    }

    newScreening(date, hall, description){
        if (this.screenings.find(x => x.date === date && x.hall === hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);   
        } else {
            let screeningObj = {
                movieName: this.movieName,                
                date, 
                hall, 
                description,
            };            

            this.screenings.push(screeningObj);
            return `New screening of ${screeningObj.movieName} is added.`;
        }
    }

    endScreening(date, hall, soldTickets){
        if (!this.screenings.find(x => x.date === date && x.hall == hall)) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);   
        } else {
            
            let currScreeningObj = this.screenings.find(x => x.date === date && x.hall === hall);

            let totalPrfitAndTicketsObj = {
                movieName: currScreeningObj.movieName,                
                totalTicketsSold: 0,
                totalProfitForMovie: 0,
            };
            
            this.totalMovieInfo.push(totalPrfitAndTicketsObj);

            // add the sold tickets count to the total sold movie tickets
            totalPrfitAndTicketsObj.totalTicketsSold += soldTickets;

            // calculate the current screening profit of sold tickets
            let currProfit = soldTickets * this.ticketPrice;
            // add the profit to the total profit for the movie
            totalPrfitAndTicketsObj.totalProfitForMovie += currProfit;

            let result = `${currScreeningObj.movieName} movie screening on ${currScreeningObj.date} in ${currScreeningObj.hall} hall has ended. Screening profit: ${currProfit}`;

            // delete the screening from the screenings array   
            this.screenings = this.screenings.filter(item => item !== currScreeningObj)

            return result.trim();
            
        }
    }

    toString (){        
        let totalProfit = this.totalMovieInfo.reduce((a, b) => a.totalProfitForMovie + b.totalProfitForMovie);
        let totalTickets = this.totalMovieInfo.reduce((a, b) => a.totalTicketsSold + b.totalTicketsSold);

        let result = '';
        
        result += `${this.movieName} full information:\n`;
        result += `Total profit: ${totalProfit}$\n`;
        result += `Sold Tickets: ${totalTickets}\n`;

        if (this.screenings.length <= 0) {
            result += `No more screenings!`;            
            return result.trim();
        } else {
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));            
            result += `Remaining film screenings:\n`;
            this.screenings.forEach(movieObj => {
                result += `${movieObj.hall} - ${movieObj.date} - ${movieObj.description}\n`
            });
            return result.trim();            
        }        
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

