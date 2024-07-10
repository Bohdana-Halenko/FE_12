// const user = {
//     name: 'Bob',
//     age: 15,
//     class: 10,
// }

// for (const key in user) {
//     console.log('Ключі: ', key);
// }

// for (const key in user) {
//     console.log('Значення: ', user[key]);
// }

// const keys = Object.keys(user);
// console.log(keys);

// const values = Object.values(user);
// console.log(values);

// const entries = Object.entries(user);
// console.log(entries); // ['name', 'Bob']
// ['age', 15]
// ['class', 10]


// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }
// const keys = Object.keys(hotel);
// console.log(keys); //  ['name', 'stars', 'capacity']

// for (const key of keys) {
//     console.log("Value: ", hotel[key])
// }  // Value:  Hilton
// // Value:  5
// // Value:  250


// const entries = Object.entries(hotel);

// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }


// const goods = {
//     apples: 7,
//     orange: 10,
//     kiwi: 4,
//     grapes: 8,
// }

// const values = Object.values(goods);
// let total = 0;
// for (const value of values) {
//     total += value;
// }

// console.log(total); //29


// const tem = [33, 30, 28];
// const min = Math.min(tem); //NaN

// const minTem = Math.min(...tem);
// console.log(minTem); //28


// const names = ['Sara', 'Nick', 'Din', 'Alex'];
// const newNames = [...names, 'Bob'];
// console.log(newNames);



// const names = ['Sara', 'Nick', 'Din', 'Alex'];
// const num = [2, 3, 5, 10];

// const arr = [...names, ...num];
// console.log(arr);


// const numbers = [1, 2, 3, 4];
// const newNumber = [...number];
// const newArr = [...number, 3];


// const names = ['Sara', 'Nick', 'Din', 'Alex'];
// const newNames = [
//     ...names.slice(0, 2),
//     'Bob',
//     ...names.slice(3)
// ];
// console.log(newNames); //['Sara', 'Nick', 'Bob', 'Alex']


// const a = {
//     x: 50,
//     y: 10,
// };

// const b = {
//     x: 20,
//     c: 25,
// }

// // const d = Object.assign({}, a, b);
// // console.log(d); //{x: 20, y: 10, c: 25}

// const d = { r: 25, ...a, t: 30, ...b };
// console.log(d); //{r: 25, x: 20, y: 10, t: 30, c: 25}


let a = 10;
let b = 15;
a = 20;
console.log(a); 
console.log(b);

const c = ['Bob'];
const d = c;
console.log(c);
console.log(d); 

c.push('Nick');
console.log(c);

console.log(d); 
