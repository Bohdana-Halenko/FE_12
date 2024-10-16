// const callback = () => console.log('Hello');
// // ...
// function fun(callback) {
//     // ...
//     callback();
// }
// fun(callback); //Hello;

// const numbers = [11, 24, 31, 14, 51, 36, 27, 8, 9];
// const cost = numbers.map(function (number) {
//     return number * 1.6;
// });
// console.log(cost);


// Напишіть функцію allElements, яка приймає масив і колбек-функцію.
// Використовуйте колбек для перевірки всіх елементів масиву і
// поверніть true, якщо всі елементи відповідають умові, інакше false.

// function allElements(arr, callback) {
//     for (let i = 0; i < arr.length; i++){
//         if (!callback(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// };

// const allEven = allElements([2, 4, 6, 8, 10], function (element) {
//     return element % 2 === 0;
// });
// console.log(allEven); //true

// Напишіть функцію filterArray, яка приймає масив і колбек - функцію.
// Використовуйте колбек для відбору елементів масиву і поверніть новий
// масив з відфільтрованими елементами.

function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
const numbers = filterArray([3, 17, 12, 15, 25, 88, 98, 23], function (element) {
    return element % 2 === 1;
});
console.log(numbers); // [3, 17, 15, 25, 23]