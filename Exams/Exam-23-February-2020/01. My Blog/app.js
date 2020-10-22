function solve(){
   // 01. Add referentions to the elements which we will manipulate
   const inputs = document.querySelectorAll('input');
   const creatorInput = inputs[0];
   const titleInput = inputs[1];
   const categoryInput = inputs[2];
   const contentInput = document.getElementById('content');

   const addButton = document.querySelector('button');

   const sections = document.querySelectorAll('section');
   const articleSec = sections.item(1);

   const archiveSec = sections.item(3);
   const archiveUl = archiveSec.querySelector('ul');

   addButton.addEventListener('click', (e) => {
      e.preventDefault();

       // Read the input content and validate
       const creator = creatorInput.value.trim();
       const title = titleInput.value.trim();
       const category = categoryInput.value.trim(); 
       const content = contentInput.value.trim(); 

      // Clear the inputs.
       creatorInput.value = '';
       titleInput.value = '';
       categoryInput.value = '';
       contentInput.value = ''; 

       // Set the buttons
       const deleteButton = el('button', 'Delete', { className: 'btn delete' });
       const archiveButton = el('button', 'Archive', { className: 'btn archive' });

       // Create the buttons in div, as requred
       const btnDiv = el('div', [
         deleteButton,
         archiveButton,
     ], { className: 'buttons' });

      const task = el('article', [ // Array because the elements in the article are many
         el('h1', title),
         el('p', [
            "Category:",
            el('strong', `${category}`),
         ]),
         el('p', [
            "Creator:",
            el('strong', `${creator}`),
         ]),
         el('p', `${content}`),    
         btnDiv, // Add the div with the buttons
      ]);

      archiveButton.addEventListener('click', () => {
         e.preventDefault();         
         const titleElement = el('li', `${title}`);
         archiveUl.appendChild(titleElement);
         sortList(archiveUl);
         task.remove();

         function sortList(ul) {
            Array.from(ul.getElementsByTagName("LI"))
               .sort((a, b) => a.textContent.localeCompare(b.textContent))
               .forEach(li => ul.appendChild(li));
         }
      });      

      deleteButton.addEventListener('click', () => {
         e.preventDefault();
         task.remove();
      });

      // Adding newly created elements with functionality to DOM
      articleSec.appendChild(task);
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


