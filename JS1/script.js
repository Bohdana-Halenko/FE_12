// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const des = document.querySelector('#des');

// parent.addEventListener('click', () => {
//     console.log('Parent click');
// });
// child.addEventListener('click', () => {
//     console.log('Child click');
// });
// des.addEventListener('click', () => {
//     console.log('Des click')
// })


// const parent = document.querySelector('#parent');

// parent.addEventListener('click', (event) => {
//     console.log('event.targen: ', event.target);
//     console.log('event.currentTarget: ', event.currentTarget)
// })


// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const des = document.querySelector('#des');

// parent.addEventListener('click', () => {
//     alert('Parent click');
// });
// child.addEventListener('click', () => {
//     alert('Child click');
// });
// des.addEventListener('click', (event) => {
//     event.stopImmediatePropagation();
//     alert('Des click');
// })

// const box = document.querySelector('div.box');
// box.addEventListener('click', function (event) {
//     console.log(event.target);
// })


// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// function selectColor(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const selectedColor = event.target.dataset.color;
//     output.textContent = `Selected color: ${selectedColor}`;
//     output.style.color = selectedColor;
// }

// createPaletteItems();

// function createPaletteItems() {
//     const items = [];
//     for (let i = 0; i < 60; i++){
//         const color = getRandomHexColor();
//         const item = document.createElement('button');
//         item.type = 'button';
//         item.dataset.color = color;
//         item.style.backgroundColor = color;
//         item.classList.add('item');
//         items.push(item);
//     }
//     colorPalette.append(...items);
// }

// function getRandomHexColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';

//     for (let i = 0; i < 6; i++){
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


const taskForm = document.querySelector('#taskForm');
const newTaskInput = document.querySelector('#newTask');
const taskList = document.querySelector('#taskList');

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        newTaskInput.value = "";
    }
});

function addTask(taskText) {
    const li = document.createElement("li");
    
    li.innerHTML = `
    <div>
        <input type="checkbox" class="complateTask">
        <span>${taskText}</span>
    </div>
        <button class="deleteTask">Del</button>
    `;

    taskList.appendChild(li);
}

taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteTask')) {
        event.target.parentElement.remove();
    }

    if (event.target.classList("complateTask")) {
        const task = event.target.nextElementSibling;
        task.style.textDecoration = event.target.checked ? 'line-through' : 'none'
    }
})
