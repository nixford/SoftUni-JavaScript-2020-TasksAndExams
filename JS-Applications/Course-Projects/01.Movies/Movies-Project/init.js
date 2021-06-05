function addEventListeners() {
  let navigationTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML);

  Handlebars.registerPartial('navigation-template', navigationTemplate);

  navigate('home');
}

function navigateHandler(e) {
  e.preventDefault();

  if (!e.target.classList.contains('nav-link')) {
    return;
  }

  let url = new URL(e.target.href);

  navigate(url.pathname.slice(1));
}

function onLoginSubmit(e) {
  e.preventDefault();

  console.log(document.forms['login-form']);
  let formData = new FormData(document.forms['login-form']);

  let email = formData.get('email'); // Takes the value of element with name email
  let password = formData.get('password');

  authService.login(email, password)
    .then(data => {
      navigate('home');
    });
}

function onRegisterSubmit(e) {
  e.preventDefault();

  console.log(document.forms['register-form']);
  let formData = new FormData(document.forms['register-form']);

  let email = formData.get('email'); // Takes the value of element with name email
  let password = formData.get('password');
  let repeatPassword = formData.get('repeatPassword');

  if (password !== repeatPassword) {
    throw new Error('Your password and confirmation password do not match!');
  }

  authService.register(email, password)
    .then(data => {
      navigate('home');
    });
}

function onAddMovieSubmit(e) {
  e.preventDefault();

  let formData = new FormData(document.forms['add-movie-form']);
  let title = formData.get('title');
  let description = formData.get('description');
  let imageUrl = formData.get('imageUrl');
}

addEventListeners();