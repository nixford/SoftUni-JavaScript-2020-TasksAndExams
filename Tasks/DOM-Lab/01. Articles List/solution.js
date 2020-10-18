function createArticle() {
	
	let article = document.createElement('article');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');

	let lable = document.getElementById('createTitle');
	let textArea = document.getElementById('createContent');
	let section = document.getElementById('articles');

	if (lable === null || textArea === null || section === null) {
		throw new Error('ERROR');
	}

	if (lable.value === '' || textArea.value === '') {
		return;
	}

	h3.innerHTML = lable.value;
	p.innerHTML = textArea.value;

	section.appendChild(article);
	article.appendChild(h3);
	article.appendChild(p);

	lable.value = '';
	textArea.value = '';
}