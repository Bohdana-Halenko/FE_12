// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(()=> resolve(text), delay)
//     })
// }
// const promiseOne = makePromise('promise one', 1500);
// const promiseTwo = makePromise('promise two', 1000);

// Promise.all([promiseOne, promiseTwo])
//   .then((value) => {
//     console.log(value);
//   }) // ['promise one', 'promise two']
//   .catch((error) => {
//     console.log(error);
//   });



// race
//  const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(()=> resolve(text), delay)
//     })
// }
// const promiseOne = makePromise('promise one', 500);
// const promiseTwo = makePromise('promise two', 1000);

// Promise.race([promiseOne, promiseTwo])
//   .then((value) => {
//     console.log(value);
//   }) //promise two
//   .catch((error) => {
//     console.log(error);
//   });


//any
// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Oops!")), 1000)
//     ),
//     new Promise((resolve, reject) => setTimeout(()=> resolve('Успіх!'), 1500)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Error!")), 2000)
//   ),
// ]).then(value => console.log(value))
//     .catch(error => console.log(error));



// new Promise(resolve => resolve('success')).then(value => console.log(value));

// Promise.resolve('success').then(value => console.log(value));


// new Promise((resolve, reject) => reject('error')).catch(error => console.log(error));
// Promise.reject('error').catch(error => console.log(error));


// const makePromise = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return {
//             success: false,
//             message: 'Error guest name'
//         }
//     }
//     return {
//       success: true,
//       message: `Welcome ${guestName}`,
//     };
// }

// const result = makePromise('Bob');

// if (result.success) {
//     console.log(result.message)
// } else {
//     console.error(result.message)
// }


// const makePromise = (guestName, onSuccess, onError) => {
//     if (guestName === '' || guestName === undefined) {
//         return onError("Error guest name");
//     }
//     onSuccess(`Welcome ${guestName}`);
// }
// makePromise('',
//     succes => console.log(succes),
//     error => console.log(error)
// )


// const makePromise = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return Promise.reject('Error guest name');
//     }
//     return Promise.resolve(`Welcome ${guestName}`);
// }
// makePromise("Bob")
//   .then(success => console.log(success))
//   .catch(error => console.log(error));