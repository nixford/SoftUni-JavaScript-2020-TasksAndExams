function growingWord() {	
  const colors = ['blue', 'green', 'red'];

    const paragraph = document.getElementsByTagName('p')[2];

    let color = paragraph.style.color;
    paragraph.style.color = !color ? 'blue' : colors[(colors.indexOf(color) + 1) % colors.length];

    let fontSize = paragraph.style.fontSize.replace('px', '');
    paragraph.style.fontSize = (!fontSize ? '2' : fontSize * 2) + 'px';
}