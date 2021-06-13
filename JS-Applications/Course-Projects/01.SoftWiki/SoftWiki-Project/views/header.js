import { html } from '../node_modules/lit-html/lit-html.js';
// import { html, render } from 'https://unpkg.com/lit-html?module';

export default () => html`
<!-- Header -->
<header>
  <h1><a class="home" href="/">SoftWiki</a></h1>
  <nav class="nav-buttons">
    <a href="/login">Login</a>
    <a href="/create">Create</a>
    <a href="/logout">Logout</a>
    <a href="/register">Register</a>
  </nav>
</header>
`;
