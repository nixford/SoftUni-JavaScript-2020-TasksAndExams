import { html } from '../node_modules/lit-html/lit-html.js';

import header from './header.js'; // .js because there is no webpack
import footer from './footer.js';

export default () => html`
    ${header()}
    <div>
        <h2>something between</h2>
    </div>
    ${footer()}
`;