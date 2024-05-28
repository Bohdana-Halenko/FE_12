// 1
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// 2
// for (let i = 2; i <= 20; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 3
// for (let i = 1; i <= 10; i++){
//     let result = 7 * i; 
//     console.log(`7 * ${i} = ${result}`);
// }


// 6
// let n = 7;
// for (let i = 1; i <= n; i++){
//     if (i > n) {
//         break;
//     }
//     console.log(i);
// }



// 7
let i = 1;
while (i <= 20) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
}
