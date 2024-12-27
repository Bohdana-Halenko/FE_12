const expenceName = document.getElementById("expenceName");
const expenceAmount = document.getElementById("expenceAmount");
const addExpenceButton = document.getElementById("addExpenceButton");
const totalAmount = document.getElementById("totalAmount");
const expenceList = document.getElementById("expenceList");
const clearHistoryButton = document.getElementById("clearHistoryButton");

let expences = JSON.parse(localStorage.getItem("expences")) || [];

function updateTotal() {
  const total = expences.reduce((sum, expence) => sum + expence.amount, 0);
  totalAmount.textContent = total.toFixed(2);
}

function renderExpences() {
  expenceList.innerHTML = '';
  expences.forEach((expence, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${expence.name} - ${expence.amount.toFixed(2)}</span>
    <button onclick="deleteExpence(${index})">Видалити</button>
    `;
    expenceList.appendChild(li);
  });
  updateTotal();
};

addExpenceButton.addEventListener('click', () => {
  const name = expenceName.value.trim();
  const amount = parseFloat(expenceAmount.value);

  if (name && !isNaN(amount) && amount > 0) {
    expences.push({ name, amount });
    localStorage.setItem("expences", JSON.stringify(expences));
    expenceName.value = "";
    expenceAmount.value = "";
    renderExpences();
  } else {
    alert("Перевірте правильність введених даних");
  }
})

function deleteExpence(index) {
  expences.splice(index, 1);
  localStorage.setItem("expences", JSON.stringify(expences));
  renderExpences();
}

clearHistoryButton.addEventListener('click', () => {
  if (confirm("Ви впевнені ви, що хочете видалити всю історію витрат?")) {
      expences = [];
      localStorage.removeItem("expences");
      renderExpences();
  }
});


renderExpences();