// function letsStart() {
//     let promise = new Promise((resolve, reject) => {
//         console.log('Prepare start!!!');
    
//         setTimeout(function() {
//             resolve('Start!!!'); // Always resolves with start
            // reject('Cancelled!!!'); // Always resolves with start
//         }, 1000);    
//     });

//     return promise;
// }

// Same as
function letsStart() {
	console.log('Prepare start!!!');
    return Promise.resolve('Start!!!');
}



let promise = letsStart();

// console.log(promise); // Pending promise
promise
    .then(function(res) { // in case of resolve
        console.log('Success!!!');
        console.log(res);
    })
    .catch(function(err) { // in case of reject
        console.log('Failed!!!');
        console.log(err);
    })
    .finally(() => { // executes always case of reject
        console.log('The end');
    });

// console.log(promise); // Again will be pending promise
// console.log('some rondom text here'); // will be executed before promise, because the primise execution is async