import { html, render } from './node_modules/lit-html/lit-html.js';

import authService from './services/authService.js';
import articleService from './services/articleService.js';

import { onLoginSubmit, onCreateSubmit } from './eventListeners.js';

import layout from './views/layout.js';
import home from '/views/home.js';
import login from './views/login.js';
import notFound from './views/not-found.js';
import register from './views/register.js';
import createMovie from './views/create-movie.js';
import movieDetails from './views/movie-details.JS'

const routes = [
    {
        path: '/',
        template: (props) => {
            let template = home;
            let url = '/';

            if (!props.isAuthenticated) {
                template = login;
                url = '/login'
            }

            history.pushState({}, '', url)
            return template(props);
        }, 
        getData: articleService.getAll,
    },
    {
        path: '/login',
        template: login,
    },
    {
        path: `/logout`,
        template: (props) => {
            authService.logout();
            history.pushState({}, '', '/')
            return login(props);
        }
    },
    {
        path: '/register',
        template: register,
        context: {
            onLoginSubmit
        }
    },
    {
        path: '/not-found',
        template: notFound,
    },
    {
        path: '/create',
        template: createMovie,
        context: {
            onCreateSubmit,
        }
    },
    {
        path: '/details/(?<id>\.+)',
        template: movieDetails,
        getData: articleService.getOne, // todo
    }
];

const router = (path) => {
    history.pushState({}, '', path)

    // 'i' for case incencitive
    let route = routes.find(x => new RegExp(`^${x.path}$`, 'i').test(path)) || routes.find(x => x.path == '/not-found');
    let context = route.context;

    let params = new RegExp(`^${route.path}$`, 'i').exec(path).groups;

    let userData = authService.getData();

    if (route.getData) {
        route.getData().then(data => {
            render(layout(route.template, { navigationHandler, onLoginSubmit, ...userData, ...context, data, params }), document.getElementById('app'));
        })
    }

    render(layout(route.template, { navigationHandler, onLoginSubmit, ...userData, ...context, params }), document.getElementById('app'));
};

function navigationHandler(e) {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        let url = new URL(e.target.href);

        router(url.pathname);
    }
}

export default router;