const routes = {
  'home': 'home-template',
  'login': 'login-form-template',
  'register': 'register-form-template',
  'add-movie': 'add-movie-template',
}

const router = async (path) => {
  let app = document.getElementById('app');
  let templateDate = authService.getData();

  switch (path) {
    case 'home':
      templateDate.movies = await movieService.getAll();
      break;
    case 'logout':
      authService.logout();
      return navigate('home');
    default:
      break;
  }

  let templateId = routes[path];

  // Handlebars.compile creates function which return HTML
  let template = Handlebars.compile(document.getElementById(templateId).innerHTML);

  app.innerHTML = template(templateDate);
};

const navigate = (path) => {
  history.pushState({}, '', path);
  router(path);
}
