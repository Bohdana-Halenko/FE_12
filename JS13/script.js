// const isActive = true;

// const one = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isActive) {
//             resolve('Person is active')
//         } else {
//             reject('Person isn*t active')
//         }
//     }, 2000)
// });

// // console.log('Before one.then()');

// // one.then(
// //     value => {
// //         console.log('onResolve one.then()');
// //         console.log(value);
// //     },
// //     error => {
// //         console.log('onReject one.then()');
// //         console.log(error)
// //     }
// // )
// // console.log('After one.then()')

// one
//     .then(value => {
//         console.log(value);
//     })
//     .then()
//     .then()
//     .then()
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => console.log('Promise settled'));








// const fetchUser = (username, onSuccess, onError) => {
//     setTimeout(() => {
//         const isSuccess = true;

//         if (isSuccess) {
//             onSuccess('success value')
//         } else {
//             onError('error');
//         }
//     }, 1500);
// }

// const onFetchSuccess = user => {
//     console.log(user);
// }

// const onFetchError = error => {
//     console.error(error);
// }

// fetchUser("Bob", onFetchSuccess, onFetchError);


// const fetchUser = username => {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching ${username}`);

//         setTimeout(() => {
//             const isSuccess = true;
//             if (isSuccess) {
//                 resolve('success value');
//             } else {
//                 reject('error')
//             }
//         }, 1500)
//     })
// }

// fetchUser("Bob")
//     .then(user => console.log(user))
//     .catch(error => console.error(error));








// function addNumbers(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('Невірні дані')
//         } else {
//             resolve(a + b)
//         }
//     })
// }

// addNumbers(25, 66)
//     .then(result => console.log(`Result: ${result}`))
//     .catch(error => console.error(error));




function checkEven(numbers) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
            reject('Невірні дані');
        } else if (numbers.some(num => num % 2 !== 0)) {
            reject('Є непарні числа')
        } else {
            resolve('Всі числа парні');
        }
    })
}

const numbers = [2, 4, 6, 8, 9];

checkEven(numbers)
    .then(message => console.log("Успіх: ", message))
    .catch(error => console.error(error));