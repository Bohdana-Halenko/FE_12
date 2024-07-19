// імперативний підхід
// const num = [1, 2, 3, 4, 5, 6];
// const filterNum = [];

// for (let i = 0; i < num.length; i += 1){
//     if (num[i] > 3) {
//         filterNum.push(num[i]);
//     }
// }
// console.log(filterNum); //[4, 5, 6]

// // декларативний
// const numbers = [1, 2, 3, 4, 5, 6];
// const filterNumbers = numbers.filter(value => {
//     return value > 3;
// });
// console.log(filterNumbers);


// const a = (array, value) => {
//     for (let i = 0; i < array.length; i += 1){
//         array[i] = array[i] * value;
//     }
// }
// const number = [1, 2, 3, 4, 5, 6];
// a(number, 2);
// console.log(number); //[2, 4, 6, 8, 10, 12]

// чисті функції
// const pure = (array, value) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += 1){
//         result.push(array[i] * value);
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// const doubledNumbers = pure(numbers, 2);
// console.log(numbers);
// console.log(doubledNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];
// // numbers.forEach(num => console.log(num));
// // numbers.forEach((num, idx) => console.log(`index: ${idx}, value: ${num}`));

// const doubled = numbers.map(num => num * 2);
// console.log(doubled); //[2, 4, 6, 8, 10, 12]

// const users = [
//     { name: 'Bob', age: 17 },
//     { name: 'Nick', age: 27 },
//     { name: 'Alex', age: 47 },
// ];
// const names = users.map(user => user.name);
// console.log(names); //['Bob', 'Nick', 'Alex']

// filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers.filter(num => num < 5)); //[1, 2, 3, 4]
// console.log(numbers.filter(num => num > 5)); 
// console.log(numbers.filter(num => num === 5));

// const users = [
//     {name: 'Alex', isActive: true},
//     {name: 'Bob', isActive: false},
//     {name: 'Nick', isActive: true},
//     {name: 'Anna', isActive: true},
//     {name: 'Dilan', isActive: false},
// ];
// const userActive = users.filter(user => user.isActive);
// console.log(userActive);
// const userNotActive = users.filter(user => !user.isActive);
// console.log(userNotActive);

// find
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers.find(num => num > 6)); //7

// const users = [
//     {name: 'Alex', isActive: true, id: '1'},
//     {name: 'Bob', isActive: false, id: '2'},
//     {name: 'Nick', isActive: true, id: '3'},
//     {name: 'Anna', isActive: true, id: '4'},
//     {name: 'Dilan', isActive: false, id: '5'},
// ];
// console.log(users.find(user => user.id === '3'));


// const numbers = val => val >= 15;
// console.log([20, 135, 96, 10, 88, 74, 64].every(numbers)); //false
// console.log([20, 135, 96, 100, 88, 74, 64].every(numbers)); 
// console.log([1, 10, 8, 12, 6, 9, 5].some(numbers));
// console.log([17, 10, 8, 12, 6, 9, 5].some(numbers));

const fruits = [
    {name: 'orange', amount: 40},
    {name: 'kiwi', amount: 100},
    {name: 'apple', amount: 48},
    {name: 'banana', amount: 0},
]
console.log(fruits.every(fruit => fruit.amount > 0));
console.log(fruits.some(fruit => fruit.amount > 0));