const UserModel = firebase.auth();
const DB = firebase.firestore();

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');

    // Home routes
    this.get('#/home', function (context) {
        DB.collection('destinations')
            .get()
            .then((response) => {
                // context.offers = [];
                context.destinations = response.docs.map((destination) => { return { id: destination.id, ...destination.data() } });
                // response.forEach(offer => {
                //     context.offers.push({ id: offer.id, ...offer.data() });
                // });
                extendContext(context)
                    .then(function () {
                        this.partial('./templates/home.hbs');
                    })
            })
    });

    // User routes
    this.get('#/register', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/register.hbs');
            })
    });

    this.post('#/register', function (context) {
        const { email, password, rePassword } = context.params;

        if (email == "") {
            notify('An email should be a valid email string.', '#errorBox');
        }

        if (password == "") {
            notify('Passwords input fields shouldn’t be empty.', '#errorBox');
        }

        if (password !== rePassword) {
            notify('Both passwords should match.', '#errorBox');
        }        

        UserModel.createUserWithEmailAndPassword(email, password)
            .then((userData) => {
                saveUserData(userData);
                notify('User registration successful.', '#successBox');
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/login', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/login.hbs');
            })
    });

    this.post('#/login', function (context) {
        const { email, password } = context.params;

        if (email == "") {
            notify('An email should be a valid email string.', '#errorBox');
        }

        if (password == "") {
            notify('Passwords input fields shouldn’t be empty.', '#errorBox');
        }

        UserModel.signInWithEmailAndPassword(email, password)
            .then((userData) => {
                saveUserData(userData);
                notify('Login successful.', '#successBox');
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/logout', function (context) {
        UserModel.signOut()
            .then(() => {
                clearUserData();
                notify('Logout successful.', '#successBox');
                this.redirect('#/login');
            })
            .catch(errorHandler);
    });

    // Destinations routes
    this.get('#/dasboardDetails', function (context) {
        DB.collection('destinations')
            .get()
            .then((response) => {
                // context.offers = [];
                context.destinations = response.docs.map((destination) => { return { id: destination.id, ...destination.data() } });
                // response.forEach(offer => {
                //     context.offers.push({ id: offer.id, ...offer.data() });
                // });
                extendContext(context)
                    .then(function () {
                        this.partial('./templates/dasboardDetails.hbs');
                    })
            })
        
    });

    this.get('#/create', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/create.hbs');
            })
    });

    this.post('#/create', function (context) {
        const { destination, city, duration, departureDate, imgUrl } = context.params;

        if (destination == "" || city == "" || duration == "" || departureDate == "" || imgUrl == "") {
            notify('All input fields shouldn’t be empty. ', '#errorBox');
            return;
        }

        if (duration < 1 || duration > 100) {
            notify('Duration must be between 1 and 100', '#errorBox');
            return;
        } 

        DB.collection('destinations').add({
            destination,
            city,
            duration,
            departureDate,
            imgUrl,
            organizer: getUserData().uid,
            peopleJoined: [],
        })
            .then((createDestination) => {
                notify('Destinatin successful added.', '#successBox');
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/details/:destinationId', function (context) {
        const { destinationId } = context.params;
        DB.collection('destinations')
            .doc(destinationId)
            .get()
            .then((response) => {

                const { uid } = getUserData();

                const actualDestinationData = response.data();
                const imTheOrganizer = actualDestinationData.organizer === uid;

                const userIndex = actualDestinationData.peopleJoined.indexOf(uid);
                const imInTheDestinationList = userIndex > -1;

                context.destination = { ...actualDestinationData, imTheOrganizer, id: destinationId };

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/details.hbs');
                    })
            })

    });

    this.get('#/delete/:destinationId', function (context) {

        const { destinationId } = context.params;

        DB.collection('destinations')
            .doc(destinationId)
            .delete()
            .then(() => {
                notify('Destinatin deleted', '#successBox');
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/edit/:destinationId', function (context) {
        const { destinationId } = context.params;

        DB.collection('destinations')
            .doc(destinationId)
            .get()
            .then((response) => {
                context.destination = { id: destinationId, ...response.data() };

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/edit.hbs');
                    })
            })
    });
    // Update function for Firebase
    this.post('#/edit/:destinationId', function (context) {
        const { destinationId, destination, city, duration, departureDate, imgUrl } = context.params;

        if (destination == "" || city == "" || duration == "" || departureDate == "" || imgUrl == "") {
            notify('All input fields shouldn’t be empty. ', '#errorBox');
            return;
        }

        if (duration < 1 || duration > 100) {
            notify('Duration must be between 1 and 100', '#errorBox');
            return;
        } 

        DB.collection('destinations')
            .doc(destinationId)
            .get()
            .then((response) => {
                return DB.collection('destinations')
                    .doc(destinationId)
                    .set({
                        ...response.data(),
                        destination,
                        city,
                        duration,
                        departureDate,
                        imgUrl
                    })
            })
            .then((response) => {
                notify('Successfully edited destination.', '#successBox');
                this.redirect(`#/details/${destinationId}`)
            })
            .catch(errorHandler)
    })    
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
function saveUserData(data) {
    const { user: { email, uid } } = data;
    localStorage.setItem('user', JSON.stringify({ email, uid }));
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData() {
    localStorage.removeItem('user');
}

function notify(message, selector) {
    const notification = document.querySelector(selector);
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none'; 
    }, 3000)
    


    // notification.addEventListener('click', (e) => {
    //     e.preventDefault();
        
    //     notification.style.display = 'none';        
    // });
}
