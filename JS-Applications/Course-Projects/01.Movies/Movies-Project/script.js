const routes = {
    'login': 'login-form-template',
    'register': 'register-form-template',
}

const router = (path) => {
    let app = document.getElementById('app');
    // Handlebars.compile creates function which return HTML
    let template = Handlebars.compile(document.getElementById(routes[path]).innerHTML);
    app.innerHTML = template();
};

function addEventListeners() {
    document.querySelector('.navigation').addEventListener('click', navigateHandler);
}

function navigateHandler(e) {
    e.preventDefault();

    if (!e.target.classList.contains('nav-link')) {
        return;
    }

    let url = new URL(e.target.href);

    history.pushState({}, '', url.pathname);

    router(url.pathname.slice(1));
}

addEventListeners();