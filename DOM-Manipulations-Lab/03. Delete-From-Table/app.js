function deleteByEmail() {
    let listOfEmails = document.getElementsByTagName("tr");
    let inputEmail = document.getElementsByTagName('input')[0];
    let result = document.getElementById('result');    
    let isDeleted = false;
    
    for (let i = 0; i < listOfEmails.length; i++) {
        if (listOfEmails[i].textContent.includes(inputEmail.value)) {
            
            listOfEmails[i].remove();
            result.innerHTML = 'Deleted';
            isDeleted = true;
            break;
        }     
    } 
    
    if (!isDeleted) {
        result.innerHTML = 'Not found.';
    }
    inputEmail.value = '';    
}