const routes = {
    'home': 'home-template',
    'login': 'login-form-template',
    'register': 'register-form-template',
    'add-movie': 'add-movie-template',
}

const router = (path) => {
    let app = document.getElementById('app');

    switch (path) {
        case 'logout':
            authService.logout();
            return navigate('home');    
        default:
            break;
    }

    // Handlebars.compile creates function which return HTML
    let template = Handlebars.compile(document.getElementById(routes[path]).innerHTML);
    let authData = authService.getData();
    console.log(authData);
    app.innerHTML = template(authData);
};

const navigate = (path) => {
    history.pushState({}, '', path);
    router(path);
}
