// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }
// // const { name, stars, capacity } = hotel;
// // console.log(name, stars, status);
// // console.log(hotel);

// // const { name = 'hotel', stars = 4, status = 'close' } = hotel;
// // console.log(name, stars, status);

// // const { name: hotelName, stars, status: hotelStatus } = hotel;
// // console.log(hotelName, stars, hotelStatus);

// const { name, ...rest } = hotel;
// console.log(name); //Hilton
// console.log(rest); //{stars: 5, capacity: 250}

// let options = {
//     size: {
//         width: 200,
//         height: 300
//     },
//     items: ['Cake', 'Donut'],
//     extra: true,
// }

// const {
//     size: { width, height },
//     items: [item1, item2],
//     title = 'Menu'
// } = options;

// console.log(title); //Menu
// console.log(width); //200
// console.log(item1);
// console.log(item2);



const rgb = [200, 35, 255];
// const [red, green, blue] = rgb;
// console.log(`Red: ${red}, green: ${green}, blue: ${blue}`);

// let red, green, blue;
// [red, green, blue] = rgb;
// console.log(`Red: ${red}, green: ${green}, blue: ${blue}`);

// const [red, green, blue, alfa = 0.5] = rgb;
// console.log(`Red: ${red}, green: ${green}, blue: ${blue}, alfa: ${alfa}`);

const [red, ...colors] = rgb;
console.log(red);
console.log(colors);

const [, , blue] = rgb;
console.log(blue); 