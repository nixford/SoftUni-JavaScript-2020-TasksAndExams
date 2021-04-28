// In demo-app.js we will use the functionality of demo-module.js with require

const demoModule = require('./demo-module'); // the file name can be with or without .js

demoModule.printMessage('demo-app');
console.log(demoModule.name);