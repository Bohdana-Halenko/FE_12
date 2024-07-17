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

const users = [
    { name: 'Bob', age: 17 },
    { name: 'Nick', age: 27 },
    { name: 'Alex', age: 47 },
];
const names = users.map(user => user.name);
console.log(names); //['Bob', 'Nick', 'Alex']

