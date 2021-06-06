const routes = {
  'home': 'home-template',
  'login': 'login-form-template',
  'register': 'register-form-template',
  'add-movie': 'add-movie-template',
  'details': 'movie-details-template',
}

const router = async (fullPath) => {
  let [path, id] = fullPath.split('/');

  let app = document.getElementById('app');
  let templateDate = authService.getData();

  switch (path) {
    case 'home':
      templateDate.movies = await movieService.getAll();
      break;
    case 'logout':
      authService.logout();
      return navigate('home');
    case 'details': 
      let movieDetails = await movieService.getOne(id);
      Object.assign(templateDate, movieDetails);
      break;
    default:
      break;
  }
  // Handlebars.compile creates function which return HTML
  let template = Handlebars.compile(document.getElementById(routes[path]).innerHTML);
  fullPath = '';
  app.innerHTML = template(templateDate);
};

const navigate = (fullPath) => {
  let [path, id] = fullPath.split('/');
  if (id) {
    router(fullPath);
  } else {
    router(path);
  }
  history.pushState({}, '', path);   
}
