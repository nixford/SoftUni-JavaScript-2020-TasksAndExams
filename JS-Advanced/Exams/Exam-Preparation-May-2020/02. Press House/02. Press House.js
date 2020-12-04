function solve(){

    class Article{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return [
                `Title: ${this.title}`,
                `Content: ${this.content}`
            ].join('\n');
        }
    }

    class ShortReports extends Article{
        constructor(title, content, originalResearch){
            if (content.length >= 150) {
                throw new Error("Short reports content should be less then 150 symbols.");
            }
            if (originalResearch.hasOwnProperty('title') == false ||
            originalResearch.hasOwnProperty('author' == false)) {
                throw new Error("The original research should have author and title.");
            }

            super(title, content);
            this.originalResearchs = originalResearch;
            this.comments = [];           
        }

        // get originalResearchs() {
        //     this._originalResearchs;
        // }

        // set originalResearchs(value) {
        //     if (originalResearch.hasOwnProperty('title') == false ||
        //     originalResearch.hasOwnProperty('author' == false)) {
        //         throw new Error("The original research should have author and title.");
        //     }
        //     this._originalResearchs = value;
        // }

        addComment(comment){
            this.comments.push(comment);
            return "The comment is added.";
        }

        toString(){     
            let result = super.toString();
            result += `\nOriginal Research: ${this.originalResearchs.title} by ${this.originalResearchs.author}`;
 
            if (this.comments.length > 0) {
                result += '\nComments:\n';                
                result += this.comments.join(`\n`);            
            }

            return result;
        }
    }

    class BookReview extends Article{
        constructor(title, content, book){
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName,  orderDescription){
            if (this.clients.find(c => c.clientName == clientName &&
                c.orderDescription == orderDescription) !== undefined) {
                throw new Error("This client has already ordered this review.");
            } else {
                this.clients.push({
                    clientName,
                    orderDescription,
                });

                return `${clientName} has ordered a review for ${this.title}`;
            }
        }

        toString() {
            let result = super.toString();
            result += `\nBook: ${this.book.name}\n`;

            if (this.clients.length > 0) {
                result += '\nOrders:\n';
                this.clients.forEach(c => result += `${c.clientName} - ${c.orderDescription}\n`);
            }

            return result;
        }
    }
    return {
        Article, 
        ShortReports,
        BookReview
    }
}

let classes = solve();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString()); 

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 