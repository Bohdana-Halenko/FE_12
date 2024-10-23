"use strict"
// console.log(_);
// console.log(_.sum([4, 10, 2, 6, 8])); //

// const arr = [4, 10, 2, 6, 8];
// const one = arr.reduce((acc, num) => {
//     acc += num;
//     return acc;
// }, 0);
// console.log(one);
// let total = 0;
// for (let i = 0; i < arr.length; i++){
//     total += arr[i]
// }
// console.log(total);

window.addEventListener(
    'scroll', _.throttle(() => {
        console.log('Scroll 300ms');
    }, 300),
);

const output = document.querySelector('.output');
let scrollCounter = 0;

document.addEventListener('scroll', () => {
    scrollCounter += 1;
    output.textContent = scrollCounter;
})