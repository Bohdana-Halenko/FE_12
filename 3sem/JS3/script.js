const a = 'hello ' + 'GoITeens';
console.log(typeof a);


let b;
b = 7 + '5';
console.log(b); // 75
console.log(typeof b);

b = 5 + '5' + 5;
console.log(b); //555

b = 5 + 5 + '5';
console.log(b);  //105

b = '5' + 5 + 5;


const c = 'Welcome to Bahamas!';
console.log(c.length);

console.log('Welcome to Bahamas!'.length); //19

console.log(c.toLowerCase()); //welcome to bahamas!
console.log(c.toUpperCase()); //WELCOME TO BAHAMAS!

console.log(c.indexOf('to'));
console.log(c.indexOf('one'));

console.log(c.includes('Welcome')); 
console.log(c.includes('welcome'));

console.log(c.startsWith('Wel'));
console.log(c.endsWith('!'));


console.log(c.padEnd(25, '!'));
console.log(c.padStart(23, '!'));

const s = '   Hello    ';
console.log(s.trim());




const name = 'Богдана';
const age = 27;

// const message = `Мене звуть ${name}, мені ${age} років`;
const message = `Дякуємо за покупку, ${name}`;


// const message = 'Мене звуть' + ' ' + name + ' ' + 'мені' + ' ' + age + ' ' + 'років';
console.log(message);

