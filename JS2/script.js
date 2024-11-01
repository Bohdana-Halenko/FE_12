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

// window.addEventListener(
//     'scroll', _.throttle(() => {
//         console.log('Scroll 300ms');
//     }, 3000),
// );

// const output = document.querySelector('.output');
// let scrollCounter = 0;

// document.addEventListener('scroll', () => {
//     scrollCounter += 1;
//     output.textContent = scrollCounter;
// })

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttleOutput = document.querySelector(".output.throttle");
// const debounceOutput = document.querySelector(".output.debounce");
// const eventCounter = {
//     vanilla: 0,
//     throttle: 0,
//     debounce: 0,
// };

// document.addEventListener("scroll", () => {
//     eventCounter.vanilla += 1;
//     vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener("scroll",
//     _.throttle(() => {
//         eventCounter.throttle += 1;
//         throttleOutput.textContent = eventCounter.throttle;
//     }, 3000)
// );

// document.addEventListener("scroll",
//     _.debounce(() => {
//         eventCounter.debounce += 1;
//         debounceOutput.textContent = eventCounter.debounce;
//     }, 300)
// )












function updateCoordinats(event) {
    const graph = document.getElementById('graph');
    const point = document.getElementById('point');
    const coordDisplay = document.getElementById('coord');

    const rect = graph.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    point.setAttribute('cx', x);
    point.setAttribute('cy', y);

    coordDisplay.textContent = `X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`;
};

const throttleUpdate = _.throttle(updateCoordinats, 50);

const graphEl = document.getElementById('graph');
graphEl.addEventListener('mousemove', throttleUpdate)