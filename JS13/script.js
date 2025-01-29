const isActive = true;

const one = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isActive) {
            resolve('Person is active')
        } else {
            reject('Person isn*t active')
        }
    }, 2000)
}); 

// console.log('Before one.then()');

// one.then(
//     value => {
//         console.log('onResolve one.then()');
//         console.log(value);
//     },
//     error => {
//         console.log('onReject one.then()');
//         console.log(error)
//     }
// )
// console.log('After one.then()')

one
    .then(value => {
        console.log(value);
    })
    .then()
    .then()
    .then()
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log('Promise settled'));