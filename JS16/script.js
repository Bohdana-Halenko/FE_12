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


// // 2
// const fetchUsersBtn = document.getElementById('btn');
// const userList = document.querySelector('.users-list');

// fetchUsersBtn.addEventListener('click', () => {
//     fetchUsers()
//         .then((users) => renderUsers(users))
//         .catch((error) => console.log(error))
// });

// function fetchUsers() {
//     return fetch(
//       "https://jsonplaceholder.typicode.com/users?_limit=3&_sort=name"
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
// }

// function renderUsers(users) {
//     const markup = users
//         .map((user) => {
//             return `<li>
//             <p><b>Name: </b>${user.name}</p>
//             <p><b>Email: </b>${user.email}</p>
//             <p><b>Company: </b>${user.company.name}</p>
//         </li>`;
//         })
//         .join('');
    
//     userList.insertAdjacentHTML('beforeend', markup);
// }


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


// const headers = {
//   "Accept": "application/json",
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value 1",
//   "Authorization": "YOUR_API_TOKEN"
// };

// fetch("https://api.example.com/data", {
//     method: "GET",
//     headers: headers,
// }).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));





// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector(".js-search-form");
//   const cardContainer = document.querySelector(".js-card-container");

//   if (!form || !cardContainer) {
//     console.error("Форма або контейнер не знайдені");
//     return;
//   }

//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const query = form.query.value.trim().toLowerCase();
//     if (!query) return;

//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
//     if (response.ok) {
//       const data = await response.json();
//       render(data);
//     } else {
//       cardContainer.innerHTML = `<p class='error'>Покемон не знайдений</p>`
//     }
//     form.reset();
//   });

//   function render(pokemon) {
//     cardContainer.innerHTML = `
//     <div class="card">
//       <h2>${pokemon.name}</h2>
//       <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//       <p><strong>Вага: </strong>${pokemon.weight}</p>
//       <p><strong>Зріст: </strong>${pokemon.height}</p>
//     </div>
//     `;
//   }

// })


//  document.getElementById("fetchNews").addEventListener("click", function () {
//    var keyword = document.getElementById("keyword").value;
//    var xhr = new XMLHttpRequest();
//    var url =
//      "https://content.guardianapis.com/search?q=" +
//      encodeURIComponent(keyword) +
//      "&api-key=test&show-fields=thumbnail";

//    xhr.open("GET", url, true);

//    xhr.onreadystatechange = function () {
//      if (xhr.readyState === 4) {
//        var resultsDiv = document.getElementById("results");
//        resultsDiv.innerHTML = "";

//        if (xhr.status === 200) {
//          var response = JSON.parse(xhr.responseText);
//          if (response.response.results.length > 0) {
//            response.response.results.forEach(function (article) {
//              var articleDiv = document.createElement("div");
//              articleDiv.classList.add("news-item");
//              var imgHtml =
//                article.fields && article.fields.thumbnail
//                  ? "<img src='" +
//                    article.fields.thumbnail +
//                    "' alt='Зображення новини'>"
//                  : "";
//              articleDiv.innerHTML =
//                "<h3>" +
//                article.webTitle +
//                "</h3>" +
//                imgHtml +
//                "<p><a href='" +
//                article.webUrl +
//                "' target='_blank'>Читати більше</a></p>";
//              resultsDiv.appendChild(articleDiv);
//            });
//          } else {
//            resultsDiv.innerHTML = "<p>Немає результатів.</p>";
//          }
//        } else {
//          resultsDiv.innerHTML =
//            "<p class='error'>Помилка завантаження новин.</p>";
//        }
//      }
//    };

//    xhr.send();
//  });





//  document.getElementById("fetchMovies").addEventListener("click", function () {
//    const query = document.getElementById("query").value.trim();
//    const category = document.getElementById("category").value;

//    let url = "https://api.themoviedb.org/3/movie/popular?page=1";
//    if (category === "search" && query) {
//      url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
//        query
//      )}`;
//    }

//    fetch(url)
//      .then((response) => response.json())
//      .then((data) => {
//        const resultsDiv = document.getElementById("results");
//        resultsDiv.innerHTML = "";

//        if (data.results && data.results.length > 0) {
//          data.results.forEach((movie) => {
//            const movieDiv = document.createElement("div");
//            movieDiv.classList.add("movie-item");

//            const imgHtml = movie.poster_path
//              ? `<img src='https://image.tmdb.org/t/p/w200${movie.poster_path}' alt='Постер'>`
//              : "";
//            movieDiv.innerHTML = `<h3>${movie.title}</h3>${imgHtml}<p>Рейтинг: ${movie.vote_average}</p><p>${movie.overview}</p>`;
//            resultsDiv.appendChild(movieDiv);
//          });
//        } else {
//          resultsDiv.innerHTML = "<p>Немає результатів.</p>";
//        }
//      })
//      .catch(() => {
//        document.getElementById("results").innerHTML =
//          "<p class='error'>Помилка завантаження фільмів.</p>";
//      });
//  });



//  document.getElementById("book-form").addEventListener("submit", function (e) {
//    e.preventDefault();

//    const title = document.getElementById("search-title").value;
//    const genre = document.getElementById("search-genre").value;

//    let url = "https://openlibrary.org/search.json?";

//    // Додаємо параметри для пошуку по заголовку або жанру
//    if (title) {
//      url += `title=${title}&`;
//    }
//    if (genre) {
//      url += `subject=${genre}&`;
//    }

//    // Видаляємо зайве "&" в кінці
//    url = url.slice(0, -1);

//    fetchBooks(url)
//      .then((books) => {
//        if (books.length > 0) {
//          displayBooks(books);
//        } else {
//          showError("No books found");
//        }
//      })
//      .catch((error) => {
//        showError(error);
//      });
//  });

//  function fetchBooks(url) {
//    return new Promise((resolve, reject) => {
//      fetch(url)
//        .then((response) => response.json())
//        .then((data) => {
//          if (data.docs) {
//            resolve(data.docs); // Повертаємо список книг
//          } else {
//            reject("No books data found");
//          }
//        })
//        .catch(() => {
//          reject("Failed to fetch data");
//        });
//    });
//  }

//  function displayBooks(books) {
//    const bookList = document.getElementById("book-list");
//    bookList.innerHTML = ""; // Очищаємо список

//    books.forEach((book) => {
//      const bookItem = document.createElement("div");
//      bookItem.classList.add("book-item");
//      bookItem.innerHTML = `
//                     <h3>${book.title}</h3>
//                     <p><strong>Author(s):</strong> ${
//                       book.author_name ? book.author_name.join(", ") : "N/A"
//                     }</p>
//                     <p><strong>First Published:</strong> ${
//                       book.first_publish_year || "N/A"
//                     }</p>
//                     <p><strong>Genre:</strong> ${
//                       book.subject ? book.subject.join(", ") : "N/A"
//                     }</p>
//                     <img src="https://covers.openlibrary.org/b/id/${
//                       book.cover_i
//                     }-M.jpg" alt="${book.title}">
//                 `;
//      bookList.appendChild(bookItem);
//    });
//  }

//  function showError(message) {
//    const errorMessage = document.getElementById("error-message");
//    errorMessage.textContent = message;
//    errorMessage.style.display = "block";
//  }





document.getElementById("searchBtn").addEventListener("click", function () {
  const keyword = document.getElementById("keyword").value;
  if (keyword) {
    getNews(keyword);
  } else {
    document.getElementById("errorMessage").textContent =
      "Будь ласка, введіть ключове слово!";
  }
});

function getNews(keyword) {
  const apiKey = "db9b23e3c16e482ab93e9d36a9999fd5";
  const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      if (response.articles && response.articles.length > 0) {
        displayArticles(response.articles);
      } else {
        displayError("Не знайдено новин за вашим запитом.");
      }
    } else {
      displayError("Не вдалося отримати дані з API.");
    }
  };

  xhr.onerror = function () {
    displayError("Сталася помилка при з'єднанні з сервером.");
  };

  xhr.send();
}

function displayArticles(articles) {
  document.getElementById("errorMessage").textContent = "";
  const articlesContainer = document.getElementById("articles");
  articlesContainer.innerHTML = ""; // Очистити попередні результати

  articles.forEach(function (article) {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
                    <h3><a href="${article.url}" target="_blank">${
      article.title
    }</a></h3>
                    <p>${article.description}</p>
                    <p><strong>Автор:</strong> ${
                      article.author || "Невідомий автор"
                    }</p>
                `;
    articlesContainer.appendChild(articleElement);
  });
}

function displayError(message) {
  document.getElementById("errorMessage").textContent = message;
  document.getElementById("articles").innerHTML = ""; // Очистити попередні результати
}