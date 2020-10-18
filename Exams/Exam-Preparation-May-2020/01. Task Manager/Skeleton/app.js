function solve() {

    // 01. Add referentions to the elements which we will manipulate
    const sections = document.querySelectorAll("section");
    const openDiv = sections.item(1).querySelectorAll('div').item(1); // Returns second div element in second section (Open)
    const progressDiv = sections.item(2).querySelectorAll('div').item(1);
    const finishedDiv = sections.item(3).querySelectorAll('div').item(1);

    const inputTask = document.getElementById("task"); // const inputTask = document.querySelector('#task');  
    const inputDesc = document.getElementById("description"); // const inputDesc = document.querySelector('#description');
    const inputDate = document.getElementById("date"); // const inputDate = document.querySelector('#date');

    document.querySelector('#add').addEventListener('click', addTask); // addTask - function

    // 02. Creating new elements
    function addTask(e) {
        // The function addTask is in form element, which sends requests on click
        // therefore it is necessery e.preventDafault() to be included
        e.preventDefault();
                
        const taskName = inputTask.value.trim();
        const taskDesc = inputDesc.value.trim();
        const taskDate = inputDate.value.trim();

        // Read the input content and validate
        if (taskName.length > 0 && taskDesc.length > 0 && taskDate.length > 0) {
                    
            // Buttons will be manupulated, therefore must be initiated separatedly 
            // at the top first and used after that further
            const startBtn = el('button', 'Start', { className: 'green' }); // className sets the attributes
            const finishBtn = el('button', 'Finish', { className: 'orange' });
            const deleteBtn = el('button', 'Delete', { className: 'red' });

            const btnDiv = el('div', [
                startBtn,
                deleteBtn
            ],  { className: 'flex' }); //  { className: 'flex' } sets the attributes
            
            // Creating elements with function    
            const task = el('article', [ // Array because the elements in the article are many
                el('h3', taskName),
                el('p', `Description: ${taskDesc}`),
                el('p', `Due Date: ${taskDate}`),
                btnDiv
            ]);

            // Adding functionality to newly created elements
            startBtn.addEventListener('click', () => {
                progressDiv.appendChild(task); // Add task conteiner
                startBtn.remove(); // Remove startBtn
                btnDiv.appendChild(finishBtn); // Add finishBtn
            });

            finishBtn.addEventListener('click', () => {
                finishedDiv.appendChild(task); // Add task conteiner
                btnDiv.remove(); // Remove the whole conteiner
            });

            deleteBtn.addEventListener('click', () => {
                task.remove();
            });

    // 03. Adding newly created elements with functionality to DOM
            openDiv.appendChild(task);
        }
    }

    // function for creating of DOM elements
    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }
        return result;
    }
}




