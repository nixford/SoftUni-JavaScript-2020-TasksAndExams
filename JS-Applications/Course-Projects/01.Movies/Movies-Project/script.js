function addEventListener() {
    document.querySelector('.navigation').addEventListener('click', e => {
        e.preventDefault();

        if (!e.target.classList.contains('nav-link')) {
            return;
        }

        let url = new URL(e.target.href);

        console.log(url);

        history.pushState({}, '', url.pathname);
    });
}

addEventListener();