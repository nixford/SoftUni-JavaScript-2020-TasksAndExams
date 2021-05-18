function addEventListener() {
    document.querySelector('.navigation').addEventListener('click', e => {
        console.log(e.target);
    });
}

addEventListener();