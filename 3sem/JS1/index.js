// 1
const age = 14;
console.log(age);

// 2
const use = "Artur";
console.log(use);

// 3
const isStudent = true;
console.log(isStudent);

// 4
const myString = "цитата";
console.log(myString);

// 5
const myNumber = 4;
const a = myNumber + 10;
console.log(a);

// 6
const myNull = null;
console.log(myNull);

// 7
const user = prompt("Вкажіть ваше ім'я");
alert(`Вітаємо вас, ${user}`);

// 8
const userName = confirm('Чи приймаєте умови?');
if (userName === true) {
    alert("Дякую")
}
else {
    alert("Дію відмінено")
}

// 9
alert("Небезпечна дія");
const danger = confirm('Дія небезпечна, ви точно підтверджуєте?');
if (danger === true) {
    alert("Дякую за підтвердження")
}
else {
    alert("Дію відмінено")
}