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
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
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