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

function onLoginSubmit(e) {
    e.preventDefault();

    console.log(document.forms['login-form']);
    let formData = new FormData(document.forms['login-form']);

    let email = formData.get('email'); // Takes the value of element with name email
    let password = formData.get('password');

    authService.login(email, password);
}

addEventListeners();