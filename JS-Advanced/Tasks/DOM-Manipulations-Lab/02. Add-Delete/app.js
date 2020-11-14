function addItem() {
    let parentElement = document.getElementById('items');
    let inputElement = document.getElementById('newText');
    let liElement = document.createElement('li');
    liElement.innerHTML = inputElement.value;
    
    parentElement.appendChild(liElement);

    let deleteLink = document.createElement("a");
    deleteLink.innerHTML = "[Delete]";
    deleteLink.href = "#";

    deleteLink.addEventListener("click", function (e) {
        e.preventDefault();

        this.parentNode.parentNode.removeChild(this.parentNode);
    })

    liElement.appendChild(deleteLink);
    parentElement.appendChild(liElement);

    inputElement.value = '';
}