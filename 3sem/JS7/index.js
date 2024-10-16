// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = ['apple', 12, true, '', undefined];
// const fruits = ['apple', 'kiwi', 'mango'];
// console.table(fruits);

// console.log(fruits[10]);
// fruits[0] = 'orange';
// console.table(fruits);

// const arr = ['cat', 'dog', 'bird'];
// arr[10] = 'fish';
// console.log(arr);

// console.log(fruits.length);

// const lastIndex = fruits.length - 1;
// console.log(lastIndex);
// const clients = ['Mango', 'Ajax', 'Poly'];
// console.log(clients);


// // for
// const names = ['Юля', 'Ніка', 'Софія'];

// // for (let i = 0; i < names.length; i += 1){
// //     console.log('Ім*я:', names[i]);
// // }

// for (const name of names){
//     console.log(name)
// }


const names = ['Юля', 'Ніка', 'Софія'];
const nameFind = 'Ніка';
let message = 'Користувача немає';
for (const name of names){
    if (name === nameFind){
        message = 'Користувач є';
        break;
    }
}
console.log(message);


// const numbers = [12, 16, 200, 1, 6, 9, 18, 74, 2, 85, 13, 133];
// const sum = 15;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < sum){
//         continue
//     }
//     console.log(`Число быльше ніж ${sum} - ${numbers[i]}`);
// }

const arr = [
    [1, 3, 5],
    [200, 5, 30],
    [36, 98, 80]
]
console.log(arr[0][2]);
console.log(arr[2][0]);


const string = 'hello goiteens';

for (const letters of string){
    console.log(letters);
}