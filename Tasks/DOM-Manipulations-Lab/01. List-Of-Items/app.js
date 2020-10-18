function addItem() {    
    let parentElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.innerHTML = inputElement.value;
    inputElement.value = '';
    parentElement.appendChild(liElement);
}