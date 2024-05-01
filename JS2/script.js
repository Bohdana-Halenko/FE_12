// const x = 5;
// const y = 2;
// const z = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// console.log(x > y);
// console.log(x < y);
// console.log(x <= z);
// console.log(x == y);
// console.log(x == z);
// console.log(x != z);
// console.log(x === y);
// console.log(x !== y);

// const a = '5';
// console.log(Number(a));
// console.log(typeof Number(a));

// const b = 'hello';
// console.log(Number(b));


// const a = '5';
// console.log(Number(a));
// console.log(typeof Number(a));


// const b = 'hello';
// console.log(Number(b));
// console.log(typeof Number(b));


console.log(Number.parseInt('20px'));
console.log(Number.parseInt('3.84qwe'));
console.log(Number.parseInt('qwe'));

console.log(Number.parseFloat('12,57gfhd89'));
console.log(Number.parseFloat('20px23'));


const a = Number('20'); //20
console.log(Number.isNaN(a)); //false

const b = Number('hello'); //NaN
console.log(Number.isNaN(b)); //true


console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2); //0.3

console.log((0.1 * 10 + 0.2 * 10) / 10);


console.log(Math.floor(100.999999));
console.log(Math.ceil(1.001));
console.log(Math.round(1.4));
console.log(Math.round(99.6));
console.log(Math.max(15, 100, 25, 48, 152, 14));
console.log(Math.min(25, 3.5, 69, 26));
console.log(Math.pow(2, 4))  //2*2*2*2
console.log(Math.random() * (10 - 1) + 1);