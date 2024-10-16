// let value = 'hello';
// console.log(Boolean(value));

// &&

// const number = 15;
// const result = number > 10 && number < 20;
// console.log(result); //true

// const number = 15;
// const result = number > 16 && number < 20;
// console.log(result);


// ||
// const number = 15;
// const result = number < 10 || number > 30;
// console.log(result);


// console.log(!true);
// console.log(!0);



// let cost = 0;
// const sub = 'normal';

// if (sub === 'pro') {
//     cost = 100
// }
// console.log(cost);


// let cost;
// const sub = 'pro';

// if (sub === 'pro') {
//     cost = 100;
// } else {
//     cost = 0;
// }


// let cost;
// const sub = 'premium';

// if (sub === 'normal') {
//     cost = 0;
// } else if (sub === 'pro') {
//     cost = 100
// } else if (sub === 'free') {
//     cost = 200;
// } else {
//     console.log("Помилка");
// }

// console.log(cost);


// let type;
// const age = 19;

// if (age >= 18) {
//     type = 'adult';
// } else {
//     type = 'child';
// }

// const age = 19;
// const type = age >= 18 ? 'adult' : 'child';











// HW4

// Task 1
// function checkFields() {
//     const fieldValue1 = document.getElementById("text-one").value;
//     const fieldValue2 = document.getElementById("text-two").value;

//     if (fieldValue1 !== '' && fieldValue2 !== ''){
//         alert("Обидва поля заповнені");
//     } else {
//         alert("Не всі поля заповнені");
//     }
// }

// Task 2
// function checkSum() {
//     const numberValue1 = parseFloat(document.getElementById("number-one").value);
//     const numberValue2 = parseFloat(document.getElementById("number-two").value);

//     if (numberValue1 + numberValue2 > 10) {
//         alert("Сума більша за 10");
//     } else {
//         alert("Сума менша або дорівнює 10");
//     }
// }

// Task 3
// function checkText() {
//     const inputValue = document.getElementById("textField").value;

//     if (inputValue.includes("JavaScript")) {
//         alert("Текст містить слово JavaScript");
//     } else {
//         alert("Текст не містить слово JavaScript")
//     }
// }

// Task 4

function checkNumber() {
    const inputValue = parseFloat(document.getElementById("numberInput").value);

    if (!isNaN(inputValue) && inputValue > 10 && inputValue < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
}