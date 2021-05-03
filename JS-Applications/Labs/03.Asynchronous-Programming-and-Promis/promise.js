let promise = new Promise((resolve, reject) => {
    console.log('Prepare start!!!');

    setTimeout(function() {
        // resolve('Start!!!'); // Always resolves with start
        // reject('Cancelled!!!'); // Always resolves with start
    }, 1000);    
});

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