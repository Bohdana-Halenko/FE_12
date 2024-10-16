// const user = {
//     name: 'Bob',
//     age: 20,
// };
// console.log(user.name);
// console.log(user['name']);


// user.name = 'Alex';
// console.log(user.name);
// user['age'] = 21;
// console.log(user.age);
// console.log(user);

// user.address = 'Avenu';
// console.log(user);
// console.log(user.class);

// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
//     guests: ['Anna', 'Bob', 'Nick'],
// };
// delete hotel.stars;
// delete hotel['stars'];
// console.log(hotel);


// let name = 'Hilton';
// let stars = 5;
// const newHotel = {
//     name: name,
//     stars: stars, 
// }

// const hotelNew = {
//     name,
//     stars,
//     capacity: 250,
// }
// console.log(hotelNew);



// const key = 'person';
// const age = 'age';
// const object = {};
// object[key] = 'Bob';
// object[age] = 15;
// console.log(object);


// const key = 'person';
// const getKey = function () {
//     return 'age';
// }
// const object = {
//     [key]: 'Nick',
//     [getKey()]: 15,
// }
// console.log(object);





const hotel = {
    name: 'Hilton',
    stars: 5,
    get: function () {
        console.log('Hello!');
    },

    // 6
    getOne() {
        console.log('Hello!');
    }
}
hotel.get();
hotel.getOne()

hotel.address = function () {
    console.log('Welcome');
}
hotel.address();


