const UserModel = firebase.auth();
const DB = firebase.firestore();

const app = Sammy('#root', function(){

    this.use('Handlebars', 'hbs');

    // Home routes
    this.get('#/home', function(context){
        DB.collection('offers')
        .get()
        .then((response) => {
            context.offers = [];
            response.forEach(offer => {
                context.offers.push({ id: offer.id, ...offer.data() });
            });
            extendContext(context)
            .then(function() {
                this.partial('./templates/home.hbs');
            }) 
        })        
    });

    // User routes
    this.get('#/register', function(context){
        extendContext(context)
            .then(function() {
                this.partial('./templates/register.hbs');
            })         
    });

    this.post('#/register', function(context){
        const { email, password, rePassword } = context.params;

        if (password !== rePassword) {
            return;
        }

        UserModel.createUserWithEmailAndPassword(email, password)
            .then((userData) => {
                // saveUserData(userData);
                this.redirect('#/login');
             })
            .catch(errorHandler);
    });

    this.get('#/login', function(context){
        extendContext(context)
            .then(function() {
                this.partial('./templates/login.hbs');
            })    
    });

    this.post('#/login', function(context){
        const { email, password } = context.params;

        UserModel.signInWithEmailAndPassword(email, password)
            .then((userData) => {
                saveUserData(userData);
                this.redirect('#/home');
             })
            .catch(errorHandler);
    });
    
    this.get('#/logout', function(context){
        UserModel.signOut()
            .then(() => {
                clearUserData();
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    // Offers routes
    this.get('#/create-offer', function(context){
        extendContext(context)
            .then(function() {
                this.partial('./templates/createOffer.hbs');
            })        
    });

    this.post('#/create-offer', function(context){
        const { productName, price, imageUrl, description, brand } = context.params;

        DB.collection('offers').add({
            productName,
            price,
            imageUrl,
            description,
            brand,
            salesman: getUserData().uid,
            clients: [],
        })
            .then((createProduct) => {
                // console.log(createProduct)
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/edit-offer/:id', function(context){        
        extendContext(context)
            .then(function() {
                this.partial('./templates/editOffer.hbs');
            })    
    });

    this.get('#/details/:offerId', function(context){  
        const { offerId } = context.params;

        DB.collection('offers')
        .doc(offerId)
        .get()
            .then((response) => {
                const actualOfferData = response.data();
                const imTheSalesMan = actualOfferData.salesman === getUserData().uid;

                context.offer = {...response.data(), imTheSalesMan};
                extendContext(context)
                .then(function() {
                    this.partial('./templates/details.hbs');
                })    
            })        
        
    });
});

(() => {
    app.run('#/home');
})();

// Adding header and footer to all pages
function extendContext(context) {

    // Adding to context info for isLoggedIn user
    const user = getUserData();
    context.isLoggedIn = Boolean(user);
    context.userEmail = user ? user.email : '';

    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/footer.hbs',
    });
}

function errorHandler(error) {
    console.log(error);
}

// Saving data to local storage if user isLoggedIn
function saveUserData(data){
    const { user: { email, uid } } = data;
    localStorage.setItem('user', JSON.stringify({ email, uid } ));
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData() {
    this.localStorage.removeItem('user');
}