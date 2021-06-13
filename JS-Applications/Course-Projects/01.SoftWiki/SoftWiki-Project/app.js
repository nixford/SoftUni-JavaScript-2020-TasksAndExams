import { html, render } from './node_modules/lit-html/lit-html.js';
import layout from './views/layout.js';
import home from '/views/home.js';

render(layout(home()), document.getElementById('app'));