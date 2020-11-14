function solve() {
    
    // 01. Add referentions to the elements which we will manipulate
    const inputs = document.querySelectorAll('input');
    const nameInput = inputs[0];
    const hallInput = inputs[1];
    const ticketPriceInput = inputs[2];

    const moviesSection = document.querySelector('#movies');
    const moviesUl = moviesSection.querySelector('ul');

    const archiveSection = document.querySelector('#archive');
    const archiveUl = archiveSection.querySelector('ul');
   
    const btnSection = document.querySelector('#container');
    const addButton = btnSection.querySelector('button');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Read the input content and validate
        const name = nameInput.value;
        const hall = hallInput.value;
        const ticketPrice = ticketPriceInput.value; 
        
        // only if inputs are all filled and the ticket price value is a number
        if (name.length <= 0 && hall.length <= 0 ) {
           return; 
        }

        if (isNaN(ticketPrice)) {
            return;
        }

        // Clear the inputs.
        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';

        const archiveButton = el('button', 'Archive');

        const div = el('div', [
            el('strong', `${ticketPrice}`),
            el('input', '', { placeholder: 'Tickets Sold' }),
            archiveButton,
        ]);        

        const li = el('li', [            
                el('span', `${name}`),               
                el('strong', `Hall: ${hall}`),            
                div,                
        ]);

        moviesUl.appendChild(li);

        archiveButton.addEventListener('click', (e) => {
            e.preventDefault();

            const ticketsSold = div.querySelector('input').value;

            console.log(ticketsSold);

            if (isNaN(ticketsSold)) {
                return;
            }

            li.remove();
            li.removeChild(div);

            const deleteButton = el('button', 'Delete');
            const clearButton = el('button', 'Clear');
            
            const list = el('li', [            
                el('span', `${name}`),               
                el('strong', `Total amount: ${(ticketsSold * ticketPrice).toFixed(2)}`),           
                deleteButton,
                clearButton,        
            ]);

            archiveUl.appendChild(list);

            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();
                
                list.remove();                
            });
            
            clearButton.addEventListener('click', (e) => {
                e.preventDefault();
                
                const parent = document.getElementById("archive");

                while (parent.firstChild) {
                    parent.firstChild.remove()
                }
            });
        });
    });

    

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