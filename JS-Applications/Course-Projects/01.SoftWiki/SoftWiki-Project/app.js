import { html, render } from './node_modules/lit-html/lit-html.js';

import headerTemplate from './views/header.js' // .js because there is no webpack

render(headerTemplate(), document.getElementById('app'));