// let seconds = 0;
// let timer = setInterval(function () {
//     seconds++;
//     console.log(seconds)
// }, 1000)

// let seconds = 15;
// let timer = setTimeout(function () {
//     console.log('Finish!')
// }, seconds * 1000)

// Cекундомір

// const display = document.getElementById("stopwatch-display");
// const startBtn = document.getElementById("start-stopwatch");
// const pauseBtn = document.getElementById("pause-stopwatch");
// const resetBtn = document.getElementById("reset-stopwatch");

// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;
// let lastUpdate = 0;

// function formatTime(ms) {
//   const hours = Math.floor(ms / (1000 * 60 * 60));
//   const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((ms % (1000 * 60)) / 1000);
//   const milliseconds = Math.floor(ms % 1000);

//   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
//     2,
//     "0"
//   )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
//     3,
//     "0"
//   )}`;
// }

// function updateDisplay() {
//     const currentTime = performance.now();
//     elapsedTime = currentTime - lastUpdate + elapsedTime;
//     lastUpdate = currentTime;

//     display.textContent = formatTime(Math.round(elapsedTime))
// }

// startBtn.addEventListener('click', () => {
//     startBtn.classList.add('hidden');
//     pauseBtn.classList.remove('hidden');
//     resetBtn.classList.remove('hidden');

//     lastUpdate = performance.now();
//     timerInterval = setInterval(updateDisplay, 10);
// })

// pauseBtn.addEventListener('click', () => {
//     pauseBtn.classList.add('hidden');
//     startBtn.classList.remove('hidden');

//     clearInterval(timerInterval);
// });

// resetBtn.addEventListener('click', () => {
//     clearInterval(timerInterval);
//     elapsedTime = 0;
//     display.textContent = '00:00:00.000';

//     startBtn.classList.remove('hidden');
//     pauseBtn.classList.add('hidden');
//     resetBtn.classList.add('hidden');
// });






// Таймер 1
// let timer = 10000;
// const timerElement = document.getElementById('timer');

// const timerInterval = setInterval(() => {
//   timer -= 1000;
//   timerElement.textContent = (timer / 1000).toFixed(0);

//   if (timer <= 5000) {
//     document.body.style.backgroundColor = 'pink';
//   }

//   if (timer <= 0) {
//     clearInterval(timerInterval);
//     timerElement.textContent = '0'
//   }
// }, 1000);



// Таймер 2
// let timerInterval;
// document.getElementById('startButton').addEventListener('click', startTimer);

// function startTimer() {
//   clearInterval(timerInterval);

//   let minutes = parseInt(document.getElementById('minutesInput').value) || 0;
//   let seconds = parseInt(document.getElementById("secondsInput").value) || 0;

//   const timerElement = document.getElementById('timer');

//   function updateTimerDisplay() {
//     timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   }
//   updateTimerDisplay();

//   timerInterval = setInterval(() => {
//     if (seconds === 0) {
//       if (minutes === 0) {
//         clearInterval(timerInterval);
//         timerElement.textContent = 'Час вийшов';
//         return;
//       } else {
//         minutes--;
//         seconds = 59;
//       }
//     } else {
//       seconds--;
//     }

//     updateTimerDisplay();
//   }, 1000);
// }




// Таймер 3
const box = document.getElementById('box');
let growing = true;
const maxSize = 200;
const minSize = 100;

function animateBox() {
  if (growing) {
    box.style.transform = 'scale(1.5)';
  } else {
    box.style.transform = 'scale(1)';
  }

  growing = !growing;
}

setInterval(animateBox, 1000);








