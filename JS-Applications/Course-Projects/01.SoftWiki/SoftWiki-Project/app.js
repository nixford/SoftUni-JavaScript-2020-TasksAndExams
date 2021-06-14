import { html, render } from './node_modules/lit-html/lit-html.js';
import layout from './views/layout.js';
import home from '/views/home.js';
import login from './views/login.js';

const routes = [
  {
    path: '/',
    template: home,
  },
  {
    path: '/login',
    template: login,
  },
];

const router = (path) => {
  let route = routes.find(x => x.path == path);  

  render(layout(route.template(), { navigationHandler }), document.getElementById('app'));
};

function navigationHandler(e) {
  if (e.target.tagName == 'A') {
    e.preventDefault();
    console.log(e.target.href);
    let url = new URL(e.target.href);
    console.log(url)

    router(url.pathname);
  }
}

router(location.pathname);
