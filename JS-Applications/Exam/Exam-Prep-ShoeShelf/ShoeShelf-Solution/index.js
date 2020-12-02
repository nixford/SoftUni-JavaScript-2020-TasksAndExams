const app = Sammy('#root', function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', function(context) {
        this.partial('./templates/homeGuest.hbs');
    });    
});

(() => {
    app.run('#/home');
})

// app.run('#/home');

// this.get('#/home', getHome);
//     this.get('#/login', getLogin);
//     this.get('#/profile', getProfile);
//     this.get('#/register', getRegister);
    
//     this.post('#/register', postRegister);
//     this.post('#/login', postLogin);
//     this.get('#/logout', getLogout);

//     this.get('#/create', getCreate);
//     this.post('#/create', postCreate);

//     this.get('#details/:id', getDetail);

//     this.get('#edit/:id', getEdit);
//     this.post('#edit/:id', postEdit);

//     this.get('#close/:id', getClose);

//     this.get('#join/:id', getJoin);