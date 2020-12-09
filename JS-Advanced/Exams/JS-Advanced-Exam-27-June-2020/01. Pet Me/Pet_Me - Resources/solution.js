function solve() {

    // Get sections for output
    let addoptionSection = document.getElementById('adoption');
    let takenSection = document.querySelector("#adopted");

    // Get input
    let addBtn = document.querySelector("#container > button");


    addBtn.addEventListener('click', (e => {
        e.preventDefault();

        let name = document.querySelector("#container > input[type=text]:nth-child(1)");
        let age = document.querySelector("#container > input[type=text]:nth-child(2)");
        let kind = document.querySelector("#container > input[type=text]:nth-child(3)");
        let currOwner = document.querySelector("#container > input[type=text]:nth-child(4)");


        // Validate
        if (name.value == '' || age.value == '' || kind.value == '' || currOwner.value == '') {
            return;
        }

        if (isNaN(age.value)) {
            return;
        }

        // Create element
        let li = document.createElement('li');
        let paragraph = document.createElement('p');

        let strongName = document.createElement('strong');
        strongName.textContent = name.value;
        paragraph.appendChild(strongName);

        paragraph.innerHTML += ' is a ';

        let strongAge = document.createElement('strong');
        strongAge.textContent = age.value;
        paragraph.appendChild(strongAge);

        paragraph.innerHTML += ' year old ';;

        let strongKind = document.createElement('strong');
        strongKind.textContent = kind.value;
        paragraph.appendChild(strongKind);

        li.appendChild(paragraph);

        let spanCurrOwner = document.createElement('span');
        spanCurrOwner.textContent = `Owner: ${currOwner.value}`;
        li.appendChild(spanCurrOwner);

        let buttonContact = document.createElement('button');
        buttonContact.textContent = 'Contact with owner';
        li.appendChild(buttonContact);

        addoptionSection.lastElementChild.appendChild(li);

         // Clear inputs 
        name.value = '';
        age.value = '';
        kind.value = '';
        currOwner.value = '';


        buttonContact.addEventListener('click', (e => {

            li.removeChild(buttonContact);

            let div = document.createElement('div');
            let input = document.createElement('input');
            input.setAttribute('placeholder', 'Enter your names');
            let btnITakeIt = document.createElement('button');
            btnITakeIt.innerText = 'Yes! I take it!';
            div.appendChild(input);
            div.appendChild(btnITakeIt);

            li.appendChild(div);


            btnITakeIt.addEventListener('click', (e => {

                if (input.value == '') {
                    return;
                }

                li.removeChild(spanCurrOwner);
                li.removeChild(div);

                let spanNewOwner = document.createElement('span');
                spanNewOwner.innerText = `New Owner: ${input.value}`;
                li.appendChild(spanNewOwner);

                let btnChecked = document.createElement('button');
                btnChecked.innerText = 'Checked';

                li.appendChild(btnChecked);

                takenSection.lastElementChild.appendChild(li);

                btnChecked.addEventListener('click', (e => {
                    takenSection.lastElementChild.removeChild(li);
                }));               

            }));
        }));        

    }));
}





