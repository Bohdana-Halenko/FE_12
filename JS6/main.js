// let number = 0;
// while (number < 10) {
//     console.log('number:', number);
//     number += 1;
// }



// let clientCounter = 10;
// const maxClients = 20;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }
// let password = '';
// do {
//     password = prompt('ВВедіть пароль більше 5-ти символів', '');
    
// } while (password.length < 6);
// console.log('Password:', password);


// const max = 5;
// for (let i = 0; i < max; i += 4){
//     console.log(i);
// }


// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1){
//     sum += i
// }
// console.log(sum);


// for (let i = 0; i < 10; i += 1){
//     if (i === 6) {
//         break;
//     }
// }

const sum = 10;
for (let i = 0; i < sum; i += 1){
    if (i % 2 === 0) {
        continue;
    }
    console.log('непарні:', i);
}
