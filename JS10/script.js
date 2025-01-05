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

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timer = null;

// startBtn.addEventListener("click", () => {
//     timer = setInterval(() => {
//         console.log(`I love JS ${Math.random()}`);
//     }, 1000)
// });

// stopBtn.addEventListener('click', () => {
//     clearInterval(timer);
//     console.log('Interval stopped!')
// })



// const counterEl = document.getElementById('counter');
// let count = 0;

// setInterval(() => {
//     count++;
//     counterEl.textContent = count;
// }, 1000)

// 4
// document.addEventListener("DOMContentLoaded", () => {
//     const timeInput = document.getElementById("timeInput");
//     const output = document.getElementById("output");
//     let timerId;

//     timeInput.addEventListener('input', () => {
//         const time = parseInt(timeInput.value);

//         clearTimeout(timerId);
//         if (isNaN(time) || time <= 0) {
//             output.textContent = 'Введіть коректні дані';
//             return;
//         }

//         output.textContent = `Таймер запущено! Очікуйте ${time} секунд...`;
//         timerId = setTimeout(() => {
//             output.textContent= 'Час вийшов! Ось ваші дані!'
//         }, time*1000)
//     })
// })

// 3
function startGame() {
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    const gameDuration = 10000;
    let gameInterval;

    function createTarget() {
        const target = document.createElement('div');
        target.className = 'target';

        const maxX = gameArea.clientWidth - 50;
        const maxY = gameArea.clientHeight - 50;
        target.style.left = `${Math.random() * maxX}px`;
        target.style.top = `${Math.random() * maxY}px`;

        target.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = `Очки: ${score}`;
            target.remove();
        });

        gameArea.appendChild(target);

        setTimeout(() => target.remove(), 2000);
    }

    gameInterval = setInterval(createTarget, 1000);

    setTimeout(() => {
      clearInterval(gameInterval);
      gameArea.innerHTML = "";
      scoreDisplay.textContent = `Гру завершено! Ваші очки: ${score}`;
    }, gameDuration);
}

startGame();