// const add = function (a, b, c) {
//     return a + b + c;
// }
// // const result = add(1, 3, 5);
// // console.log(result);

// console.log(add(5, 10, 15));





// const count = function (fromCount = 0, toCount = 5, step = 3) {
//     console.log(`fromCount = ${fromCount}, toCount = ${toCount}, step = ${step}`);
//     for (let i = fromCount; i <= toCount; i += step) {
//         console.log(i);
//     }
// };

// count(1, 30);
// count(2, 6);


// const sum = function (amount, balance) {
//     if (amount === 0) {
//         console.log('Введіть суму більше нуля');
//     }
//     else if (amount > balance) {
//         console.log('Недостатньо коштів');
//     } else {
//         console.log('Операцію проведено');
//     }
// };
// sum(400, 800);
// sum(0, 800);
// sum(2000, 800);



// const sum = function (amount, balance) {
//     if (amount === 0) {
//         console.log('Введіть суму більше нуля');
//         return;
//     }
//     if (amount > balance) {
//         console.log('Недостатньо коштів');
//         return;
//     }
//     console.log('Операцію проведено');
// }
// sum(300, 400);
// sum(0, 400);
// sum(500, 400);


// function add(a, b, c) {
//     return a + b + c;
// }


const sum = function () {
    let total = 0;
    for (const argument of arguments) {
        total += argument
    }
    return total;
}

console.log(sum(2, 4, 6));

const fn = function () {
    const arg = Array.from(arguments);
    console.log(arg);
}

fn(5, 9, 10);
fn('s', 'f', 'a'); 