// const numbers = [17, 52, 65, 41, 12, 9];
// const sum = numbers.reduce((acc, value) => acc + value, 0); //17+52+65+41+12+9
// console.log(sum); //196

// const tweets = [
//     { id: '012', likes: 23, tags: ['css', 'sass'] },
//     { id: '017', likes: 2, tags: ['js', 'javascript'] },
//     { id: '018', likes: 87, tags: ['css', 'html'] },
//     { id: '019', likes: 47, tags: ['react', 'js'] },
//     { id: '024', likes: 98, tags: ['nodejs', 'js'] },
// ];
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); //257

// const likes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);
// console.log(tags);//['css', 'sass', 'js', 'javascript', 'css', 'html', 'react', 'js', 'nodejs', 'js']


// const tagsSum = tweets => tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);

// const tags = tagsSum(tweets);
// const tagsCount = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }
//     acc[tag] += 1;
//     return acc;
// };
// const totalTags = tags => tags.reduce(tagsCount, {});
// const tagCount = totalTags(tags);
// console.log(tagCount); //{css: 2, sass: 1, js: 3, javascript: 1, html: 1, …}


// const numbers = [5, 6, 1, 3, 4, 2];
// console.log(numbers.sort());[1, 2, 3, 4, 5, 6]

// const names = ['Alex', 'Nick', 'Bob', 'Jhon'];
// console.log(names.sort()); //['Alex', 'Bob', 'Jhon', 'Nick']

// const letters = [5, 6, 1, 3, 4, 2];
// // console.log(letters.sort()); //['A', 'F', 'a', 'h']
// const newLetters = letters.sort((curEl, nextEl) => {
//     return curEl - nextEl
// });
// console.log(newLetters); //[6, 5, 4, 3, 2, 1]

// const fruits = ['kiwi', 'apple', 'orang', 'banana'];
// // fruits.sort(function (a, b) {
// //     return b.localeCompare(a);
// // });
// // console.log(fruits); //['apple', 'banana', 'kiwi', 'orang']

// const copy = [...fruits];
// console.log(copy);
// console.log(copy === fruits);



// const num = [5, 6, 1, 3, 4, 2];
// // const even = num.filter(x => x % 2 === 0);
// // console.log(even); //[6, 4, 2]
// // const newNum = even.map(x => x * 3);
// // console.log(newNum); //[18, 12, 6]
// // const reverse = newNum.reverse();
// // console.log(reverse); //[6, 12, 18]

// const result = num
//     .filter(x => x % 2 === 0)
//     .map(y => y * 3)
//     .reverse();
// console.log(result); //[6, 12, 18]


// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// players.sort((a, b) => a.timePlayed - b.timePlayed);
// console.log(players);


const arr = [
{ name: 'John', age: 32 },
{ name: 'Jane', age: 26 },
{ name: 'Mike', age: 42 },
{ name: 'Emily', age: 29 }
];

arr.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
console.log(arr); 