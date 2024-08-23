// const singleBtn = document.querySelector('#single');
// const handleClick = () => alert('Hello!');
// singleBtn.addEventListener('click', handleClick);

// const multiBtn = document.querySelector('#multiple');
// const firstCall = () => alert('First callback');
// const secondCall = () => alert('Second Callback');
// const thirdCall = () => alert('Third Callback');

// multiBtn.addEventListener('click', thirdCall);
// multiBtn.addEventListener('click', firstCall);
// multiBtn.addEventListener('click', secondCall);



// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//     alert('Click event lisener alert!');
// }

// addBtn.addEventListener('click', () => {
//     btn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handleClick);
// });


// const btn = document.querySelector('#btn');

// const handleClick = event => {
//     console.log('event:', event);
//     console.log('event type:', event.type);
// }

// btn.addEventListener('click', handleClick);

function changeColor(button) {
    const colors = ['red', 'orange', 'green', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    button.style.backgroundColor = randomColor;
}
