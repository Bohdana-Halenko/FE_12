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



// const element = document.getElementById('mousedown-up');

// element.addEventListener('mousedown', () => {
//     element.textContent = 'Кнопка миші натиснута';
// });

// element.addEventListener('mouseup', () => {
//     element.textContent = 'Кнопка миші відпущена';
// })





// 9 ДЗ
// Task 1
// const logItems = function (array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// // Task 2
// const calculateEngravingPrice = function (message, pricePerWord) {
//     const words = message.split(" ");
//     const numWords = words.length;
//     const totalPrice = numWords * pricePerWord;
//     return totalPrice;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120


// // TAsk 3
// const findLongestWord = function (string) {
//     const word = string.split(" ");
//     let longestWord = word[0];

//     for (let i = 0; i < word.length; i++){
//         if (word[i].length > longestWord.length) {
//             longestWord = word[i];
//         }
//     }
//     return longestWord;
// };


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'



// 10 HW
// Task 1

// const applyCallbackToEachElement = (arr, callback) => {
//     const result = [];
//     for (const element of arr) {
//         result.push(callback(element));
//     }
//     return result;
//  }
// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (number) => number*number;
// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); // [1, 4, 9, 16, 25]


// // Task 2
// const calculateDiscountedPrice = (price, discount, callback) => {
//     const discountPrice = price - (price * discount) / 100;
//     callback(discountPrice);
// };
// const showDiscountedPrice = (discountPrice) => {
//     console.log(`Discounted price: ${discountPrice}`);
// };
// calculateDiscountedPrice(350, 10, showDiscountedPrice); // Discounted price: 315


// // 11 HW
// // Task 1
// const bankAccount = {
//     ownerName: "Дмитро",
//     accountNumber: "123456789",
//     balance: 10000,

//     deposit: function () {
//         const amount = parseFloat(document.getElementById("amount").value);
//         if (isNaN(amount) || amount <= 0) {
//             document.getElementById("message").textContent = "Помилково введена сума";
//             return;
//         }
//         this.balance += amount;
//         document.getElementById("message").textContent = `Рахунок поповнено на ${amount}грн.`;
//         updateBalance();
//     },

//     withdraw: function () {
//         const amount = parseFloat(document.getElementById("amount").value);
//         if (isNaN(amount) || amount <= 0) {
//             document.getElementById("message").textContent = "Помилково введена сума";
//             return;
//         }

//         if (amount > this.balance) {
//             document.getElementById("message").textContent = "Недостатньо коштів";
//             return;
//         }

//         this.balance -= amount;
//         document.getElementById("message").textContent = `Знято ${amount}грн.`;
//         updateBalance();
//     }
// };

// function updateBalance() {
//     document.getElementById("ownerName").textContent = bankAccount.ownerName;
//     document.getElementById("accountNumber").textContent = bankAccount.accountNumber;
//     document.getElementById("balance").textContent = bankAccount.balance;
// }

// updateBalance();




// const element = document.getElementById('mouseover-out');

// element.addEventListener('mouseover', () => {
//     element.textContent = 'Курсор над елементом';
// });

// element.addEventListener('mouseout', () => {
//     element.textContent = "Наведіть курсор"
// })

// const element = document.getElementById('mousemove');
// element.addEventListener('mousemove', (e) => {
//     element.textContent = `Координати миші: X=${e.clientX}, Y=${e.clientY}`;
// });
 