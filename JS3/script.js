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

console.log('Welcome to Bahamas!'.length);

console.log(c.toLowerCase()); //welcome to bahamas!
console.log(c.toUpperCase()); //WELCOME TO BAHAMAS!

console.log(c.indexOf('to'));
console.log(c.indexOf('one'));

console.log(c.includes('Welcome to Bahamas!'));
console.log(c.includes('welcome'));