import { html, render } from './node_modules/lit-html/lit-html.js';
import layout from './views/layout.js';

render(layout(), document.getElementById('app'));