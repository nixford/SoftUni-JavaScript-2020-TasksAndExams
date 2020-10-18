function encodeAndDecodeMessages() {
   
    let textAreasElements = document.getElementsByTagName('textarea');
    let buttonForEncoding = document.getElementsByTagName('button')[0];
    let buttonForDecoding = document.getElementsByTagName('button')[1];

    let encodedMessage = '';
    let decodedMessage = '';

    buttonForEncoding.addEventListener('click', () => {               
        let messageForEncode = textAreasElements[0].value;        
        for (let i = 0; i < messageForEncode.length; i++) {        
            let charNum = messageForEncode.charCodeAt(i);
            let currCharacter = String.fromCharCode(charNum + 1);
            encodedMessage += currCharacter;
        }        
        textAreasElements[1].value = encodedMessage;
        textAreasElements[0].value = '';         
    });
    
    buttonForDecoding.addEventListener('click', () => {
        for (let i = 0; i < encodedMessage.length; i++) {        
            let charNum = encodedMessage.charCodeAt(i);
            let currCharacter = String.fromCharCode(charNum - 1);
            decodedMessage += currCharacter;
        }        
        textAreasElements[1].value = decodedMessage;  
        encodedMessage = '';             
    });    
}

function encodeAndDecodeMessages() {
    let send = document.getElementsByTagName("button")[0];
    let read = document.getElementsByTagName("button")[1];

    send.addEventListener("click", function (e) {
        e.preventDefault();

        let text = document.getElementsByTagName("textarea")[0].value;


        document.getElementsByTagName("textarea")[1].value = [...text].
        map((_, i) =>
            text[i] = String.fromCharCode(text[i].charCodeAt(0) + 1)).
        join("");

        document.getElementsByTagName("textarea")[0].value = "";
    });

    read.addEventListener("click", function (e) {
        e.preventDefault();

        let text = document.getElementsByTagName("textarea")[1].value;


        document.getElementsByTagName("textarea")[1].value = [...text].
        map((_, i) =>
            text[i] = String.fromCharCode(text[i].charCodeAt(0) - 1)).
        join("");
    });
}