// const friends = () => {
//     return fetch("my-api.com/me")
//         .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//         })
//         .then(user => {
//             return fetch(`my-api.com/users/${user.id}/friends`);
//         });
// }

// friends()
//     .then(friends => console.log(friends))
//     .catch(error => console.log(error));


// const friendsFetch = async () => {
//     const token = await fetch("my-api.com/me");
//     const user = await fetch(`my-api.com/profile?token=${token}`);
//     const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//     return friends;
// }
// friendsFetch()
//     .then(friends => console.log(friends))
//     .catch(error => console.log(error));

// async function add();

// const add = async function ();
// const add1 = async () => { };
// const add2 = {
//     async add();
// }
// class User{
//     async add();
// }


// 1
// const fetchUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();
//         console.log(users);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// fetchUsers();

// 2
// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// }
// const doUsers = async () => {
//     try {
//         const users = await fetchUsers();
//         console.log(users)
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// doUsers();


// const fetchUsers = async () => {
//     const url = "https://jsonplaceholder.typicode.com";
//     const first = await fetch(`${url}/users/1`);
//     const second = await fetch(`${url}/users/2`);
//     const third = await fetch(`${url}/users/3`);

//     const firstUser = await first.json();
//     const secondUser = await second.json();
//     const thirsUser = await third.json();
//     console.log(firstUser, secondUser, thirsUser)
// }
// fetchUsers();

const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com";
    const userIds = [1, 2, 3];

    const array = userIds.map(async userId => {
        const r = await fetch(`${url}/users/${userId}`);
        return r.json()
    })

    const users = await Promise.all(array);
    console.log(users)
}
fetchUsers();