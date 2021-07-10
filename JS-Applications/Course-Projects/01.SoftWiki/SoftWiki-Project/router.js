import { html, render } from './node_modules/lit-html/lit-html.js';

import authService from './services/authService.js';

import { onLoginSubmit } from './eventListeners.js';

import layout from './views/layout.js';
import home from '/views/home.js';
import login from './views/login.js';
import notFound from './views/not-found.js';
import register from './views/register.js';

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
    }
];

const router = (path) => {
    history.pushState({}, '', path)

    let route = routes.find(x => x.path == path) || routes.find(x => x.path == '/not-found');
    let context = route.context;

    let userData = authService.getData();

    render(layout(route.template, { navigationHandler, onLoginSubmit, ...userData, ...context }), document.getElementById('app'));
};

function navigationHandler(e) {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        let url = new URL(e.target.href);

        router(url.pathname);
    }
}

export default router;