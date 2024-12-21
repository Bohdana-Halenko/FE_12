// const dog = {
//     name: "Bobyk",
//     age: 5,
//     isGoodBoy: true,
//     bark() {
//         console.log("Woof!")
//     }
// }

// const json = JSON.stringify(dog);
// console.log(json); //{"name":"Bobyk","age":5,"isGoodBoy":true}


// const json1 = JSON.stringify(() => {
//     console.log('Hello!')
// })
// console.log(json1); //undefined


// console.log(JSON.parse("5")); //5
// console.log(JSON.parse("false")); //false

// const json = '{"name": "Bobyk", "age": 5, "isGoodBoy": true}';
// const dog = JSON.parse(json);
// console.log(dog); //
// console.log(dog.name)



// Веб-сховище

// const settings = {
//     theme: 'dark',
//     isAuthenfication: true,
//     options: [1, 2, 3]
// };

// //збереження
// localStorage.setItem('settings', JSON.stringify(settings));
// console.log(localStorage.getItem('settings'));
// //читання
// // const savedSettings = localStorage.getItem('settings');
// // const parsedSettings = JSON.parse(savedSettings);
// // console.log(parsedSettings);
// //видалення
// localStorage.removeItem('theme');


// localStorage.clear();









const textarea = document.getElementById('autosaveTextarea');

const STORAGE_KEY = 'autosaveTextareaContent';

const savedText = localStorage.getItem(STORAGE_KEY);
if (savedText) {
    textarea.value = savedText;
}

textarea.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
})


