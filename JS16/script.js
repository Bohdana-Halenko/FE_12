// const button = document.getElementById("getCatFact");
// const p = document.getElementById("catFact");

// button.addEventListener('click', () => {
//     fetch("https://catfact.ninja/fact")
//         .then(response => response.json())
//         .then(data => {
//             p.textContent = data.fact;
//         })
//         .catch(error => {
//             p.textContent = "Сталася помилка 😿";
//             console.log("Error: ", error)
//         });
// });


// 2
const fetchUsersBtn = document.getElementById('btn');
const userList = document.querySelector('.users-list');

fetchUsersBtn.addEventListener('click', () => {
    fetchUsers()
        .then((users) => renderUsers(users))
        .catch((error) => console.log(error))
});

function fetchUsers() {
    return fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=3&_sort=name"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

function renderUsers(users) {
    const markup = users
        .map((user) => {
            return `<li>
            <p><b>Name: </b>${user.name}</p>
            <p><b>Email: </b>${user.email}</p>
            <p><b>Company: </b>${user.company.name}</p>
        </li>`;
        })
        .join('');
    
    userList.insertAdjacentHTML('beforeend', markup);
}


// const searchParams = new URLSearchParams({
//     _limit: 3,
//     _sort: "name",
// })
// console.log(searchParams.toString()); //"_limit=5&_sort=name";

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); //https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name


// const headers = new Headers({
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value"
// })

// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: {
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   },
// });


const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value 1",
  "Authorization": "YOUR_API_TOKEN"
};

fetch("https://api.example.com/data", {
    method: "GET",
    headers: headers,
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
