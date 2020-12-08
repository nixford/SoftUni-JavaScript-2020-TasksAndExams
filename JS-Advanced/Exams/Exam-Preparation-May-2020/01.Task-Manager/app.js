function solve() {
    
    let openSection = document.querySelector("body > main > div > section:nth-child(2)");
    let inProgresSection = document.querySelector("body > main > div > section:nth-child(3)");
    let finishSection = document.querySelector("body > main > div > section:nth-child(4)");

    // Get input 
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', (e => {
        e.preventDefault();

        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        // Validate
        if (task.value =='' || description.value == '' || date.value == '') {
            return;
        }

        // Create element
        let article = document.createElement('article');

        let h3Title = document.createElement('h3');
        h3Title.innerText = task.value;

        let pDescription = document.createElement('p');
        pDescription.innerText = `Description: ${description.value}`

        let pDate = document.createElement('p');
        pDate.innerText = `Due Date: ${date.value}`

        let div = document.createElement('div');
        div.className = 'flex';

        let btnStart = document.createElement('button');
        btnStart.className = 'green';
        btnStart.innerText = 'Start';

        let btnDelete = document.createElement('button');
        btnDelete.className = 'red';
        btnDelete.innerText = 'Delete';  
        
        btnDelete.addEventListener('click', deleteArticle);

        btnStart.addEventListener('click', e => {
            let btnFinish = document.createElement('button');
            btnFinish.className = 'orange';
            btnFinish.innerText = 'Finish';
             
            btnFinish.addEventListener('click', e => {
                article.lastChild.remove();
                finishSection.lastElementChild.appendChild(article);
            });
            
            // Changing buttons
            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(btnFinish);

            inProgresSection.lastElementChild.appendChild(article); 
        }); 

        div.appendChild(btnStart);
        div.appendChild(btnDelete);

        article.appendChild(h3Title);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div);

        openSection.lastElementChild.appendChild(article);
       
        // Clear inputs 
        task.value = "";
        description.value = "";
        date.value = "";
    }));

    function deleteArticle(event){
        event.target.parentElement.parentElement.remove();
    }
}