const UserModel = firebase.auth();
const DB = firebase.firestore();

const app = Sammy("#root", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', function (context) {
        DB.collection('events')
            .orderBy("registerdPeople", "desc")
            .get()            
            .then((response) => {
                let events = {};
                // context.offers = [];
                context.events = response.docs.map((event) => { return { id: event.id, ...event.data() } });
                // response.forEach(offer => {
                //     context.offers.push({ id: offer.id, ...offer.data() });
                // });
                console.log(context.events);               

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
        const { username, password, rePassword } = context.params;

        if (password !== rePassword) {
            return;
        }

        UserModel.createUserWithEmailAndPassword(username, password)
            .then((userData) => {
                saveUserData(userData);
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
        const { username, password } = context.params;

        UserModel.signInWithEmailAndPassword(username, password)
            .then((userData) => {
                saveUserData(userData);

                notify('Login successful.', '#successBox');
                // As per the requirements - 5 seconds
                setTimeout(() => {
                    this.redirect('#/home');
                }, 5000)
            })
            .catch(e => {
                notify(`${e.message}`, '#errorBox')
            });
    });

    this.get('#/logout', function (context) {
        UserModel.signOut()
            .then(() => {
                clearUserData();
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    // Offers routes
    this.get('#/organize', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/organizeEvent.hbs');
            })
    });

    this.post('#/organize', function (context) {
        const { name, dateTime, description, imageURL } = context.params;

        DB.collection('events').add({
            name,
            dateTime,
            description,
            imageURL,
            creator: getUserData().uid,
            registerdPeople: [],
        })
            .then((createEvent) => {
                console.log(createEvent)
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/profile', function (context) {

        const { uid } = getUserData();

        DB.collection('events')
            .where("creator", "==", `${uid}`)
            .get()
            .then((response) => {

                context.events = response.docs.map((event) => { return { ...event.data() } });

                console.log(context.events);

                context.thereIsEvents = Boolean(context.events);

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/userProfile.hbs');
                    })
            });

    });

    this.get('#/details/:eventId', function (context) {
        const { eventId } = context.params;
        DB.collection('events')
            .doc(eventId)
            .get()
            .then((response) => {

                const { uid } = getUserData();

                const actualEventData = response.data();
                const imTheCreator = actualEventData.creator === uid;

                const userIndex = actualEventData.registerdPeople.indexOf(uid);
                const imInTheEventsList = userIndex > -1;

                context.event = { ...actualEventData, imTheCreator, id: eventId, imInTheEventsList };

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/detailsEvent.hbs');
                    })
            })

    });

    this.get('#/edit/:eventId', function (context) {
        const { eventId } = context.params;

        DB.collection('events')
            .doc(eventId)
            .get()
            .then((response) => {
                context.event = { id: eventId, ...response.data() };

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/editEvent.hbs');
                    })
            })
    });

    this.post('#/edit/:eventId', function (context) {
        const { eventId, name, dateTime, description, imageURL } = context.params;

        DB.collection('events')
            .doc(eventId)
            .get()
            .then((response) => {
                return DB.collection('events')
                    .doc(eventId)
                    .set({
                        ...response.data(),
                        name,
                        dateTime,
                        description,
                        imageURL,
                    })
            })
            .then((response) => {
                this.redirect('#/home');
            })
            .catch(errorHandler);
    })

    this.get('#/join/:eventId', function (context) {

        const { eventId } = context.params;
        const { uid } = getUserData();

        DB.collection('events')
            .doc(eventId)
            .get()
            .then((response) => {
                const eventData = { ...response.data() };
                eventData.registerdPeople.push(uid);
                return DB.collection('events')
                    .doc(eventId)
                    .set(eventData)
            })
            .then(() => {
                this.redirect(`#/details/${eventId}`)
            })
            .catch(errorHandler);
    });

    this.get('#/delete/:eventId', function (context) {

        const { eventId } = context.params;

        DB.collection('events')
            .doc(eventId)
            .delete()
            .then(() => {
                this.redirect('#/home');
            })
            .catch(errorHandler);
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
    context.username = user ? user.email : '';

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
    sessionStorage.setItem('user', JSON.stringify({ email, uid }));
}

function getUserData() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData() {
    this.sessionStorage.removeItem('user');
}

function notify(message, selector) {
    const notification = document.querySelector(selector);
    notification.textContent = message;
    notification.style.display = 'block';

    const btn = document.getElementsByName('button');

    notification.addEventListener('click', (e) => {
        e.preventDefault();
        
        notification.style.display = 'none';        
    });
}