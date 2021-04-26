// message can be accessed globally - it can be limited with IIFE
// let message = 'Hello from console - function';

// function printMessage(additionalMessage) {
//     console.log(message, additionalMessage);
// }

(function(scope) {
    let message = 'Hello from console - function';

    function printMessage(additionalMessage) {
        console.log(message, additionalMessage);
    }

    scope.printMessage = printMessage;
})(window);

