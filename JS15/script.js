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


const numbers = [5, 6, 1, 3, 4, 2];
console.log(numbers.sort());[1, 2, 3, 4, 5, 6]

const names = ['Alex', 'Nick', 'Bob', 'Jhon'];
console.log(names.sort()); //['Alex', 'Bob', 'Jhon', 'Nick']