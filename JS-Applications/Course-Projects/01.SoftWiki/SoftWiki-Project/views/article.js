import { html } from '../node_modules/lit-html/lit-html.js';

export default ({
    _id,
    title,  
    description,
    navigationHandler,  
}) => html`
    <article>
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="/details/${_id}" class="btn details-btn" @click=${navigationHandler}>Details</a>
    </article>
`;