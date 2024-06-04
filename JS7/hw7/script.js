// 1) Створити масив з трьох чисел. Змінити значення 
// другого елемента масиву на 10.
const arr = [1, 2, 3];
arr[1] = 10;
console.table(arr);

// 2) Створити масив із трьох рядків. Додати до масиву
//  ще один рядок.
const arrTwo = ['first', 'second', 'three'];
arrTwo[3] = 'four';
console.table(arrTwo);



// 3) Створити скрипт який поверне суму всіх чисел в масиві.
const arrSum = [4, 10, 5, 6];
let sum = 0;
for (let i = 0; i < arrSum.length; i++){
    sum += arrSum[i]
}
console.log(sum);

// 4) Створити масив з 5-ти чисел. Вивести на екран всі 
// елементи масиву за допомогою циклу for.
const arr4 = [1, 8, 7, 3, 5];
for (let i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}


// 5) Створити масив із 5-ти рядків. Вивести на екран кожен
// рядокз масиву, який містить більше 5 - ти символів.
const string = ['hello', 'JavaScript', 'GoITeens', 'hi', 'Monday'];
for (let i = 0; i < string.length; i++){
    if (string[i].length < 5) {
        continue;
    }
    console.log(string[i]);
}



// 6) Створити масив з 10-ти чисел. Знайти та вивести на
// екран максимальне значення з масиву.

const arr6 = [20, 8, 25, 28, 60, 77, 500, 58, 120, 22];
let max = arr[0];
for (let i = 0; i < arr6.length; i++){
    if (arr6[i] > max) {
        max = arr6[i];
    }
}
console.log(max);


// 7) Створити масив з 10-ти чисел. Знайти всі парні числа
// в масиві та вивести їх на екран. 
const arr7 = [20, 8, 25, 28, 60, 77, 500, 58, 120, 22];
for (let i = 0; i < arr7.length; i++){
    if (arr7[i] % 2 === 0) {
        console.log(arr7[i]);
    }
}