import { html } from '../node_modules/lit-html/lit-html.js';

import header from './header.js'; // .js because there is no webpack
import footer from './footer.js';

export default (children, props) => html`
    ${header(props)}

    ${children(props)}

    ${footer(props)}
`;