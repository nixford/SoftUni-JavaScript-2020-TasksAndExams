let message = 'Hello from moduleES6.js';

function printMessage(additionalMessage) {
    console.log(message, additionalMessage);
}

export default {
    printMessage,
    name: 'Pesho',
};
