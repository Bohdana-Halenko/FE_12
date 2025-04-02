const countryInput = document.getElementById("country");
const list = document.getElementById("countries-list");

countryInput.addEventListener(
  "input",
  _.debounce(() => {
    const country = countryInput.value.trim();
    if (country.length < 2) {
      alert("Введіть більше символів");
      return;
    }
    renderCountry(country);
  }, 400)
);

function renderCountry(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Такої країни не існує");
      }
      return response.json();
    })
    .then(data => {
      list.innerHTML = "";

      if (data.length === 1) {
        renderOneCountry(data[0]);
      } else {
        const el = data.map(item => `<li>${item.name.common}</li>`).join("");
        list.insertAdjacentHTML("beforeend", el);
      }
    })
    .catch(error => {
      console.log(error);
      list.innerHTML = "<li>Збігів немає</li>";
    });
}

function renderOneCountry(country) {
  const languages = Object.values(country.languages).join(", ");
  const markup = `
    <div class="country-card">
        <h2 class="country-name">${country.name.common}</h2>
        <div class="country-wrap">
            <ul class="country-list">
                <li class="country-item">Capital: ${country.capital}</li>
                <li class="country-item">Population: ${country.population}</li>
                <li class="country-item">Languages: ${languages}</li>
            </ul>
            <img src="${country.flags.png}" alt="${country.name.common}" class="country-flag">
        </div>
    </div>`;
    list.innerHTML = markup;
}
