// message can be accessed globally - it can be limited with IIFE
let message = 'Hello from console - function';

function printMessage(additionalMessage) {
    console.log(message, additionalMessage);
}


// I. IIFE
(function(scope) {
    let message = 'Hello from console - function';

    function printMessage(additionalMessage) {
        console.log(message, additionalMessage);
    }

    scope.printMessage = printMessage; // With scope we can export what is necessery and can hide for example message
 })(window);

// Another option is with object, containing the function, which we want to use
let logger = (function() { // logger is the name of the module
    let message = 'Hello from console - function';

    function printMessage(additionalMessage) {
        console.log(message, additionalMessage);
    }

    return {
        printMessage,
    }
})();


