const routes = {
    'home': 'home-template',
    'login': 'login-form-template',
    'register': 'register-form-template',
}

const router = (path) => {
    let app = document.getElementById('app');
    // Handlebars.compile creates function which return HTML
    let template = Handlebars.compile(document.getElementById(routes[path]).innerHTML);
    // let authData = authService.getData();
    // console.log(authData)
    app.innerHTML = template();
};

const navigate = (path) => {
    history.pushState({}, '', path);
    router(path);
}
