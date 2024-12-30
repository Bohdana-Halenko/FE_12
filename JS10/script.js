// console.log("First log");
// setTimeout(() => {
//     console.log("Second log");
// }, 3000);

// setTimeout(() => {
//   console.log("Third log");
// }, 4000);



// const one = () => {
//     console.log("Hello!")
// }
// const timer = setTimeout(one, 3000);
// clearTimeout(timer);

// setTimeout(callback, 1);
// setTimeout(callback, 4);


// const button = document.querySelector('.btn');
// const onClick = () => {
//     setTimeout(() => {
//         alert('I love JavaScript!');
//     }, 2000)
// }
// button.addEventListener('click', onClick)

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timer = null;

startBtn.addEventListener("click", () => {
    timer = setInterval(() => {
        console.log(`I love JS ${Math.random()}`);
    }, 1000)
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    console.log('Interval stopped!')
})