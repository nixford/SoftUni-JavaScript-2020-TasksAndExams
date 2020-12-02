function solve() {   
   let word = document.getElementById('searchField');

   let button = document.getElementById("searchBtn");
      button.addEventListener('click', () => {
         Array.from(document.querySelectorAll('tbody > tr')).forEach(row => { 
            // returns all tr in tbody as an array
            if (row.textContent.includes(word.value) && word.value != "") {
               row.classList.remove('tr');
            } else {
               row.classList.remove('select');
            }
         })
         word.value = '';
      });
   
}