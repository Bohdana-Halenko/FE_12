//1
const bankAccount = {
    ownerName: 'Bohdana',
    accountNumber: 00000000,
    balance: 5000,
    deposit(amount) {
        this.balance += amount;
        updateBalance();
        alert('Поточний баланс:' + this.balance);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            alert('Мало коштів');
            return;
        } else {
            this.balance -= amount;
            updateBalance();
            alert('Поточний баланс:' + this.balance);
        }
    },
    displayInfo() {
        document.getElementById('balance').innerText = `${this.balance} грн.`;
    },
};
bankAccount.displayInfo();
function updateBalance() {
    document.getElementById('balance').textContent = bankAccount.balance;
};
function deposit() {
    let amount = prompt("Вкажіть суму:");
    if (amount > 0 && !isNaN(amount)) {
        bankAccount.deposit(parseFloat(amount));
    } else {
        alert('Невірні дані');
    }
};
function withdraw() {
    let amount = prompt("Вкажіть суму:");
    if (amount > 0 && !isNaN(amount)) {
        bankAccount.withdraw(parseFloat(amount));
    } else {
        alert('Невірні дані');
    }
};


// 4
const movie = {
    title: 'Hello',
    director: 'Tom',
    year: 1999,
    rating: 9,
    displayInfo() {
        document.getElementById('title').innerText = `Title: ${this.title}`;
        document.getElementById('director').innerText = `Director: ${this.director}`;
        document.getElementById('year').innerText = `Year: ${this.year}`;
        document.getElementById('rating').innerText = `Rating: ${this.rating}`;
    },
};
function updateRating() {
    const ratingNew = parseFloat(document.getElementById('change').value);
    if (ratingNew > 8 && !isNaN(ratingNew)) {
        movie.rating = ratingNew;
        movie.displayInfo();
        const title = document.getElementById('title');
        title.style.color = 'green';
    } else if (isNaN(ratingNew)) {
        alert('ВВедіть число');
    } else {
        movie.rating = ratingNew;
        movie.displayInfo();
    }
};
movie.displayInfo();
