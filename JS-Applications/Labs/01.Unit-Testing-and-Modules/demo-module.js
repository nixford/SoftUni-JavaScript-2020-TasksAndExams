// II. Node.js Modules - the module system of Node.js is called commonjs
// In Node.js every file is module

// message can NOT be accessed globally
let message = 'Hello from demo-module.js';

function printMessage(additionalMessage) {
    console.log(message, additionalMessage);
}

// We can export printMessage with module object
module.exports = printMessage;

// The object can include multiple properties
module.exports = {
    name: 'Pesho',
    printMessage,
}

// Same as
// module.exports = function printMessage(additionalMessage) {
//     console.log(message, additionalMessage);
// }
