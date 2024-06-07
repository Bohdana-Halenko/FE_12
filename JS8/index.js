// const string = 'Hello, my friends!';
// console.log(string.split(' '));

// const names = ['Alex', 'David', 'Nika', 'Bob', 'Jana', 'Artur'];
// console.log(names.join('-'));

// const names = ['Alex', 'David', 'Nika', 'Bob', 'Jana', 'Artur'];
// console.log(names.indexOf('Bobee'));

// const names = ['Alex', 'David', 'Nika', 'Bob', 'Jana', 'Artur'];
// console.log(names.includes('Dima'));


// const fruits = ['apple', 'banana', 'cherry'];
// const fruit = 'kiwi';

// if (fruits.includes(fruit)) {
//     console.log('Yes')
// } else (console.log('No'))

// const numbers = [1, 2];  //[1, 2, 5]
// numbers.push(5);
// console.log(numbers);

// numbers.push(8);
// console.log(numbers);
// numbers.push('one');
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);



// const names = ['Alex', 'David', 'Nika', 'Bob', 'Jana', 'Artur'];
// console.log(names.shift());
// console.log(names);

// names.unshift('Bohdan');
// console.log(names);
// names.unshift('Bohdana');


// const names = ['Alex', 'David', 'Nika', 'Bob', 'Jana', 'Artur'];
// // console.log(names.slice(1, 3));
// console.log(names.slice());

// видалення
// const names = ['Bob', 'Anna', 'Alex', 'Nick', 'Nika'];
// const newNames = names.splice(0, 3);
// console.log(names);
// console.log(newNames);

// додавання
// const names = ['Bob', 'Anna', 'Alex', 'Nick', 'Nika'];
// names.splice(0, 0, 'Dima', 'Bohdan');
// console.log(names);
// names.splice(5, 0, 'H');


// заміна
// const names = ['Bob', 'Anna', 'Alex', 'Nick', 'Nika'];
// names.splice(1, 1, 'Mariya');
// console.log(names);
// names.splice(2, 1, 'B', 'F', 'T');


const fruits = ['apple', 'orange', 'kiwi'];
const numbers = [1, 3, 5, 7];

const arr = fruits.concat(numbers);
console.log(arr);
console.log(fruits);
console.log(numbers);