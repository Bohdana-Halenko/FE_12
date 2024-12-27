// const dog = {
//     name: "Bobyk",
//     age: 5,
//     isGoodBoy: true,
//     bark() {
//         console.log("Woof!")
//     }
// }

// const json = JSON.stringify(dog);
// console.log(json); //{"name":"Bobyk","age":5,"isGoodBoy":true}

// const json1 = JSON.stringify(() => {
//     console.log('Hello!')
// })
// console.log(json1); //undefined

// console.log(JSON.parse("5")); //5
// console.log(JSON.parse("false")); //false

// const json = '{"name": "Bobyk", "age": 5, "isGoodBoy": true}';
// const dog = JSON.parse(json);
// console.log(dog); //
// console.log(dog.name)

// Веб-сховище

// const settings = {
//     theme: 'dark',
//     isAuthenfication: true,
//     options: [1, 2, 3]
// };

// //збереження
// localStorage.setItem('settings', JSON.stringify(settings));
// console.log(localStorage.getItem('settings'));
// //читання
// // const savedSettings = localStorage.getItem('settings');
// // const parsedSettings = JSON.parse(savedSettings);
// // console.log(parsedSettings);
// //видалення
// localStorage.removeItem('theme');

// localStorage.clear();

// const textarea = document.getElementById('autosaveTextarea');

// const STORAGE_KEY = 'autosaveTextareaContent';

// const savedText = localStorage.getItem(STORAGE_KEY);
// if (savedText) {
//     textarea.value = savedText;
// }

// textarea.addEventListener('input', () => {
//     localStorage.setItem(STORAGE_KEY, textarea.value);
// })

// 26.12
let users = JSON.parse(localStorage.getItem("users")) || [];
let editingIndex = null;

document
  .getElementById("addUser")
  .addEventListener("click", addOrUpdateUser);

function renderTable() {
  const tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button class="editButton" data-index="${index}">Edit</button>
                <button class="deleteButton" data-index="${index}">Delete</button>
            </td>
        `;
    tableBody.appendChild(row);
  });

  document.querySelectorAll(".editButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      editUser(index);
    });
  });

  document.querySelectorAll(".deleteButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      deleteUser(index);
    });
  });
}

function addOrUpdateUser() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!firstName || !lastName || !email || !phone) {
    alert("Please fill in all fields");
    return;
  }
  const user = { firstName, lastName, email, phone };
  if (editingIndex !== null) {
    users[editingIndex] = user;
    editingIndex = null; 
  } else {
    users.push(user);
  }

  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
  clearForm(); 
}

function editUser(index) {
  const user = users[index];
  document.getElementById("firstName").value = user.firstName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("email").value = user.email;
  document.getElementById("phone").value = user.phone;

  editingIndex = index; 
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
}

function clearForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

renderTable();