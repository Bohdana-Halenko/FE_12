// document.addEventListener("keydown", e => {
//     console.log("keydown:", e);
// }
// )
// document.addEventListener("keyup", e => {
//     console.log("Keyup:", e)
// }

// )

// document.addEventListener("keydown", e => {
//     console.log('key:', e.key);
//     console.log('code:', e.code);
// })


// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if ((event.ctrlKey || event.altKey) && event.code === "KeyS") {
//         console.log("ctrl+s or command+s");
//     }
// })



const element = document.getElementById('mousedown-up');

element.addEventListener('mousedown', () => {
    element.textContent = 'Кнопка миші натиснута';
});

element.addEventListener('mouseup', () => {
    element.textContent = 'Кнопка миші відпущена';
})