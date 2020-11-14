function getArticleGenerator(articles) {
    
    let textElement = document.getElementById('content');

    let count = 0;

    return function () {
        if (count < articles.length) {
            const article = document.createElement("article");
            article.innerHTML = articles[count];
            textElement.appendChild(article);
            count++;
        }
    }
}
